'use strict';
angular.module('myApp')
    .controller('MainCtrl', function ($scope, multiBarChartDataFunc, discBarChartDataFunc, ohlcChartDataFunc, stockPricesdata) {
        // //get Ticker Data
        // $scope.myInterval = 3000;
        // $scope.noWrapSlides = false;
        // $scope.active = 1;
        // var slides = $scope.slides = [];
        // var currIndex = 0;
        // var newWidth = 300 + $scope.slides.length + 1;
        // var dataSet = getTickerData.query(function (data) {
        //     var i = 0;

        //     data.forEach(function (item) {
        //         console.log(i, "  ", item);
        //         $scope.slides.push({
        //             image: '//unsplash.it/' + newWidth + '/200',
        //             text: item['stock'] + " - " + item["currentValue"] + " - " + item["rateChange"],//[$scope.slides.length % 4],
        //             id: i
        //         });
        //         i++;
        //     });


        // });

        // Multi Bar chart configurations
        $scope.multiBarChartOptions = {
            chart: {
                type: 'multiBarChart',
                height: 450,
                margin: {
                    top: 20,
                    right: 20,
                    bottom: 45,
                    left: 45
                },
                clipEdge: true,
                duration: 500,
                stacked: false,

                yAxis: {
                    axisLabel: 'Stock Price',
                    axisLabelDistance: -20,
                    tickFormat: function (d) {
                        return d3.format(',.0f')(d);
                    },
                    xAxis: {
                        axisLabel: 'Companies',
                        showMaxMin: false,
                        tickFormat: function (d) {
                            return d3.format(',f')(d);
                        }
                    },
                }
            }
        };
        // Multi Bar chart dataset
        $scope.multiBarChartData = [];
        var dataSet = multiBarChartDataFunc.query(function (data) {

            $scope.api1.refresh();
            $scope.multiBarChartData = data.multiBarData;
        });
        // Discrete Bar chart
        $scope.discBarChartOptions = {
            chart: {
                type: 'discreteBarChart',
                height: 450,
                margin: {
                    top: 20,
                    right: 20,
                    bottom: 50,
                    left: 55
                },

                showValues: true,
                valueFormat: function (d) {
                    return d3.format(',.2f')(d);
                },
                duration: 500,
                xAxis: {
                    axisLabel: 'Companies'
                },
                yAxis: {
                    axisLabel: 'Change in Percentage',
                    axisLabelDistance: -10
                }
            }
        };
        // Multi Bar chart dataset
        $scope.discBarChartData = [];
        var dataSet = discBarChartDataFunc.query(function (data) {
            $scope.api2.refresh();
            $scope.discBarChartData = data.discBarChartData;
        });

        // OHLC Chart chart
        $scope.ohlcChartOptions = {
            chart: {
                type: 'ohlcBarChart',
                height: 450,
                margin: {
                    top: 20,
                    right: 20,
                    bottom: 40,
                    left: 60
                },
                x: function (d) {

                    return d.date;
                },
                y: function (d) { return d.close; },
                duration: 100,

                xAxis: {
                    axisLabel: 'Dates',
                    tickFormat: function (d) {
                        //   console.log("timestamp", d * 1000);
                        return d3.time.format('%x')(new Date(d));

                    },
                    showMaxMin: false
                },

                yAxis: {
                    axisLabel: 'Stock Price',
                    tickFormat: function (d) {
                        return '$' + d3.format(',.1f')(d);
                    },
                    showMaxMin: false
                },
                zoom: {
                    enabled: true,
                    scaleExtent: [1, 10],
                    useFixedDomain: false,
                    useNiceScale: false,
                    horizontalOff: false,
                    verticalOff: true,
                    unzoomEventType: 'dblclick.zoom'
                }
            }
        };
        //  OHLC Chart dataset
        $scope.ohlcChartData = [];
        var dataSet = ohlcChartDataFunc.query(function (data) {
            $scope.api3.refresh();
            $scope.ohlcChartData = data.ohlcChartData;
        });

        // Tabulature dataset
        $scope.rowCollection = [];
        var dataSet = stockPricesdata.query(function (data) {
            //  console.log("data",data);
            $scope.rowCollection = data;
        });
    })
    .controller('DetailCtrl', function ($scope, stackedAreaChartData, MonthlyStockPrice) {
        //    console.log("detail page");
        $scope.stackedAreaChartOptions = {
            chart: {
                type: 'stackedAreaChart',
                height: 450,
                margin: {
                    top: 20,
                    right: 20,
                    bottom: 30,
                    left: 40
                },
                x: function (d) { return d[0]; },
                y: function (d) { return d[1]; },
                useVoronoi: false,
                clipEdge: true,
                duration: 100,
                useInteractiveGuideline: true,
                xAxis: {
                    showMaxMin: false,
                    tickFormat: function (d) {
                        return d3.time.format('%x')(new Date(d))
                    }
                },
                yAxis: {
                    tickFormat: function (d) {
                        return d3.format(',.2f')(d);
                    }
                },
                zoom: {
                    enabled: true,
                    scaleExtent: [1, 10],
                    useFixedDomain: false,
                    useNiceScale: false,
                    horizontalOff: false,
                    verticalOff: true,
                    unzoomEventType: 'dblclick.zoom'
                }
            }
        };

        $scope.stackedAreaChartData = [];

        var dataSet = stackedAreaChartData.query(function (data) {
            $scope.api.refresh();
            $scope.stackedAreaChartData = data.stackedAreaChartData;
        });

        // Tabulature dataset
        $scope.rowCollection = [];
        var dataSet = MonthlyStockPrice.query(function (data) {
            $scope.api1.refresh();

            $scope.rowCollection = data;
            console.log(data);
        });

    })
    .controller('HighlightsCtrl', function ($scope, getTickerData) {

        //get Ticker Data
        $scope.myInterval = 3000;
        $scope.noWrapSlides = false;
        $scope.active = 1;
        var slides = $scope.slides = [];
        var currIndex = 0;
        var newWidth = 300 + $scope.slides.length + 1;
        var dataSet = getTickerData.query(function (data) {
            var i = 0;

            data.forEach(function (item) {

                $scope.slides.push({
                    image: '//unsplash.it/' + newWidth + '/200',
                    text1: item['stock'],
                    text2: item["rateChange"],
                    text3: item["currentValue"],//[$scope.slides.length % 4],
                    id: i,
                });
                i++;
            });


        });


        $scope.title = "hello world";
    })



    .controller('CompanyCtrl', function ($scope, stockPricesdata) {
        $scope.rowCollection = [];
        var dataSet = stockPricesdata.query(function (data) {
            //   console.log(data);
            $scope.api4.refresh();
            $scope.rowCollection = data;
            //  console.log($scope.rowCollection);

        });



    });