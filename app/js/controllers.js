'use strict';

/* Controllers */

angular.module('eNEWSey.controllers', [])
    .controller('FeedCtrl', ['$scope', 'FeedService', function ($scope, Feed) {
        $scope.feeds = Feed.feedList();

        $scope.articles = [];

        $scope.loadFeeds = angular.forEach($scope.feeds, function (feed) {
            Feed.parseFeed(feed.link).then(function (response) {
                angular.forEach(response.data.responseData.feed.entries, function (data) {
                    var article = {};

                    article.author = feed.author;
                    article.content = data.content;
                    article.date = getTimestamp(data.publishedDate);
                    article.link = data.link;
                    article.title = data.title;

                    $scope.articles.push(article);
                });
            });
        });

        $scope.predicate = '';

        $scope.chooseFeed = function (feedName) {
            $scope.predicate = feedName;
        };

        var getTimestamp = function (str) {
            return Date.parse(str);
        };
    }]);
