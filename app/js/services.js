'use strict';

/* Services */

angular.module('eNEWSey.services', [])
    .factory('FeedService', ['$http', function ($http) {
        return {
            feedList: function () {
                return [
                    {
                        author: 'нгс24',
                        link: 'http://news.ngs24.ru/rss/'
                    },
                    {
                        author: 'newslab',
                        link: 'http://newslab.ru/news/all/rss'
                    },
                    {
                        author: 'sibnovosti',
                        link: 'http://krsk.sibnovosti.ru/news/rss_for_users.xml'
                    },
                    {
                        author: 'yarsk',
                        link: 'http://www.yarsk.ru/rss/news/'
                    }
                ];
            },
            parseFeed: function (url) {
                var requestUrl = '//ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=50&callback=JSON_CALLBACK&q=' + encodeURIComponent(url);
                return $http.jsonp(requestUrl)
                    .success(function (data) {
                        if (data !== null) {
                            return data;
                        }
                    });
            }
        }
    }]);