//엘리먼트들에 대한 데이터를 테이블 형식으로 화면에 표현하기

function makeTable(elem){ //elem 안에 
	$table = $("<table border=1>");  //$table : jquery 객체가 들어잇는 함수 
	
	//$table <- 변수생략가능, 변수생략하면 위도우 객체가 됨. (예. window.onload , alert) 
	//var를 생략하면, 자바스크립트 전부에 사용할 수 있는 ,window.$table 이 됨. 
	//<더 알아보고싶으면, js 변수 호이스팅에 대해 알아보자! (var, let. constant 함수에 대해 공부해보자)
	
	
	
	
	
	
	//컬럼 정의하기
	for(var i =0; i<1;i++){ // 한번도는데 왜 만들어놨냐? - 그냥 데이터 넣기랑 비교해서 보라고 ,
		$tr=$("<tr>");  
		for(var j=0; j<elem.eq(0).children().length;j++){
			$td=$("<td>").append(elem.eq(0).children().eq(j).prop("tagName"));
			//append : 자식요소 맨 뒤에 추가! 
			$tr.append($td);
		}
		$table.append($tr);
	}
	
	
	<tr><td>EMPLOYEE_ID</td><td>LAST_NAME</td>EMAIL<td></td>PHONE<td>.....</td><tr>
	
	
	
	
	
	//데이터 넣기
	for(var i =0; i<elem.length;i++){  //elem.lengtH: row 의 갯수만큼 반복! 
		$tr=$("<tr>");
		for(var j=0; j<elem.eq(i).children().length;j++){
			$td=$("<td>").append(elem.eq(i).children().eq(j).text());
			$tr.append($td);
		}
		$table.append($tr);
	}
	
	//만들어진 테이블 반환
	return $table;
}



