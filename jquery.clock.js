// JavaScript Document

$(function(){
	'use strict';

	// 定数　（月・曜日の配列）
	var MONTH = {
				full: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
				short: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
			},
			DAY = {
				full: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
				short: ['Sun', 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat'],
				ja: ['日', '月', '火', '水', '木', '金', '土']
			};

	// 表示中時刻
	var nowCurrent;

	// 毎秒ごとに時刻を取得し表示
	setInterval( clock, 100 );

	// 日付＆時間の出力関数
	function clock(){
		// 現在時間の取得
		var now = new Date();

		if ( now.getSeconds() !== nowCurrent ) {
			// 表示中時刻の更新
			nowCurrent = now.getSeconds();

			// 各値の取得
			now = {
				'full': now,
				'year': now.getFullYear(),
				'month': MONTH.short[now.getMonth()],
				'month-full': MONTH.full[now.getMonth()],
				'month-num': now.getMonth() + 1,
				'month-num-full': ( now.getMonth() + 1 < 10 ) ? '0' + ( now.getMonth() + 1 ) : now.getMonth() + 1,
				'date': now.getDate(),
				'date-full': ( now.getDate() < 10 ) ? '0' + now.getDate() : now.getDate(),
				'day': DAY.short[now.getDay()],
				'day-full': DAY.full[now.getDay()],
				'day-ja': DAY.ja[now.getDay()],
				'hour': ( now.getHours() < 10 ) ? '0' + now.getHours() : now.getHours(),
				'minute': ( now.getMinutes() < 10 ) ? '0' + now.getMinutes() : now.getMinutes(),
				'second': ( now.getSeconds() < 10 ) ? '0' + now.getSeconds() : now.getSeconds()
			};
	
			// 出力
			$.each( now, function( key, value ) {
				var className = '.'+key;
				$(className).html( value );
			});
		}
	}

});