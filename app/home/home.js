var homeModule = angular.module('homeModule', [
    'ngRoute',
    'downGitModule',
]);

homeModule.config([
    '$routeProvider',

    function ($routeProvider) {
        $routeProvider
            .when('/home', {
                templateUrl: 'app/home/home.html',
                controller: [
                    '$scope',
                    '$routeParams',
                    '$location',
                    'toastr',
                    'downGitService',

                    function ($scope, $routeParams, $location, toastr, downGitService) {
                        $scope.downUrl = "";
                        $scope.url = "";
                        $scope.isProcessing = { val: false };
                        $scope.downloadedFiles = { val: 0 };
                        $scope.totalFiles = { val: 0 };

                        var templateUrl = "https?://github.com/.+/.+";
                        var downloadUrlInfix = "#/home?url=";
                        var downloadUrlPrefix = "https://micktk.github.io/DownGit/" + downloadUrlInfix;

                        if ($routeParams.url) {
                            $scope.url = $routeParams.url;
                        }
                        // If there is no query
                        /*else{
                            window.open("https://github.com/MickTK/DownGit", "_self");
                        }*/

                        if ($scope.url.match(templateUrl)) {
                            var parameter = {
                                url: $routeParams.url,
                                fileName: $routeParams.fileName,
                                rootDirectory: $routeParams.rootDirectory
                            };
                            var progress = {
                                isProcessing: $scope.isProcessing,
                                downloadedFiles: $scope.downloadedFiles,
                                totalFiles: $scope.totalFiles
                            };
                            downGitService.downloadZippedFiles(parameter, progress, toastr);

                        } else if ($scope.url != "") {
                            toastr.warning("Invalid URL!", { iconClass: 'toast-down' });
                            //window.open("https://github.com/MickTK/DownGit", "_self");
                        }

                        $scope.catchEnter = function (keyEvent) {
                            if (keyEvent.which == 13) {
                                $scope.download();
                            }
                        };

                        $scope.createDownLink = function () {
                            $scope.downUrl = "";

                            if (!$scope.url) {
                                return;
                            }

                            if ($scope.url.match(templateUrl)) {
                                $scope.downUrl = downloadUrlPrefix + $scope.url;
                            } else {
                                toastr.warning("Invalid URL!", { iconClass: 'toast-down' });
                                //window.open("https://github.com/MickTK/DownGit", "_self");
                            }
                        };

                        $scope.download = function () {
                            window.location = downloadUrlInfix + $scope.url;
                        };

                    }],
            });
    }
]);
