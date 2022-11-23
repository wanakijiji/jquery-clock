// JavaScript Document

$(function(){

		// グローバル変数
		var month = {
					full: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
					short: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
				},
				day = {
					full: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
					short: ['Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun'] 
				};

	// 日付＆時間の出力
	clock();

	// 日付＆時間の出力関数
	function clock(){
		// 現在時間の取得
		var now = new Date();

		// 各値の取得
		now = {
			full: now,
			year: now.getFullYear(),
			month: month.short[now.getMonth()],
			monthfull: month.full[now.getMonth()],
			date: now.getDate(),
			day: day.short[now.getDay()],
			dayfull: day.full[now.getDay()],
			hour: ( now.getHours() < 10 ) ? '0' + now.getHours() : now.getHours(),
			minute: ( now.getMinutes() < 10 ) ? '0' + now.getMinutes() : now.getMinutes(),
			second: ( now.getSeconds() < 10 ) ? '0' + now.getSeconds() : now.getSeconds()
		}

		// 出力
		$.each( now, function( key, value ) {
			var className = '.'+key;
			$(className).text( value );
		});
		setTimeout( clock, 1000 );
	}

});