'use strict';
var url = "http://192.168.1.143:8080/hadoopRest/rest";
angular.module('myApp').
    factory('multiBarChartDataFunc', ['$resource',
        function ($resource) {

                return $resource('multibarchart.json', {}, {
           // return $resource(url + "/getAllNextDayStockPrice", {}, {
                query: {
                    method: 'GET',
                    isArray: false
                }

            });
        }
    ])
    .factory('getTickerData', ['$resource',
        function ($resource) {

                return $resource('TickerData.json', {}, {
           // return $resource(url + "/getTickerData", {}, {
                query: {
                    method: 'GET',
                    isArray: true
                }

            });
        }
    ])
    .factory('discBarChartDataFunc', ['$resource',
        function ($resource) {
               return $resource('discBarChartData.json', {}, {
           // return $resource(url + "/getAllCompaniesNextDayPredictedChange", {}, {
                query: {
                    method: 'GET',
                    isArray: false
                }
            });
        }
    ])
    .factory('ohlcChartDataFunc', ['$resource',
        function ($resource) {
                  return $resource('ohlcChartdata.json', {}, {
           // return $resource(url + "/getAllHistoricalData", {}, {
                query: {
                    method: 'GET',
                    isArray: false
                }
            });
        }
    ])
    .factory('stockPricesdata', ['$resource',
        function ($resource) {
                   return $resource('stockPricesdata.json', {}, {
          //  return $resource(url + "/getAllNextStockPriceWithPercentChange", {}, {
                query: {
                    method: 'GET',
                    isArray: true
                }
            });
        }
    ])
    .factory('stackedAreaChartData', ['$resource',
        function ($resource) {
                     return $resource('stackedAreaChartData.json', {}, {
        //    return $resource(url + "/getMonthlyPredictionsByStockName/NDAQ", {}, {
                query: {
                    method: 'GET',
                    isArray: false
                }
            });
        }
    ])
    .factory('MonthlyStockPrice', ['$resource',
        function ($resource) {
            var cname = 'cbs';
            var urls = document.URL;
            var urlArray = urls.split("/");
            var organId = urlArray[urlArray.length - 1];

                   return $resource('MonthlyStockPrice.json', {}, {
       //     return $resource(url + "/getMonthlyStockPriceWithPercentChange/" + organId, {}, {
                query: {
                    method: 'GET',
                    isArray: true
                }
            });
        }
    ])
    .factory('getStockCompanyDetails', ['$resource',
        function ($resource) {
                   return $resource('MonthlyStockPrice.json', {}, {
       //     return $resource(url + "/getStockCompanyDetails", {}, {
                query: {
                    method: 'GET',
                    isArray: false
                }
            });
        }
    ]);

