
// 1. 모바일상에서 햄버거 버튼을 누르면 원래 있던 nav칸 아래로 메뉴 한칸이 생기면서 슬라이드되서 나오게. 
const menuBtn = document.querySelector('.navbar__toggle-btn');
const menuContainer = document.querySelector('.menu-container');
const menuNav = document.querySelector('.navbar__menu');
console.log(menuNav)
menuBtn.addEventListener('click', () => {
    menuContainer.classList.toggle('open');
    menuNav.classList.toggle('open');
});


// 2. 내소개, 기술, 내작업실 등 메뉴를 누를때마다 슬라이딩 되어 해당 section으로 이동
function clickmenu() {
    const menu = document.getElementsByTagName("li");
    for (let i = 0; i < menu.length; i++) {
        menu[i].classList.remove("active");
    }
}

function goToScroll(name) {
    let location = document.querySelector('#' + name);
    menuid = 'mn_' + location.id
    window.scrollTo({ top: location.offsetTop -50, behavior: "smooth" });
    clickmenu();
    select = document.getElementById(menuid)
    select.classList.add("active");
}


// 3. 프로젝트의 각 탭에 프로젝트 갯수(counter div)를 표시하기
    // 각 탭을 누르면 해당 프로젝트만 표시하기(filter기능 쓰면 됨)
window.onload = function(){
    const allCnt = document.getElementsByClassName('project');
    const frontCnt = document.getElementsByClassName("Front");
    const BackCnt = document.getElementsByClassName("Back");
    const AICnt = document.getElementsByClassName("AI");
    document.getElementById("category__countAll").textContent = allCnt.length;
    document.getElementById("category__countFront").textContent = frontCnt.length;
    document.getElementById("category__countBack").textContent = BackCnt.length;
    document.getElementById("category__countAI").textContent = AICnt.length;
}
function filterObj(c){
    let project, i;
    let showCount = 0;
    project = document.getElementsByClassName('project'); //HTML 문서 내에서 class 속성이 project인 모든 요소를 찾아옵니다.
    if (c == 'all') c= ''; // 만약 매개변수c가 'all'일 경우, 모든 프로젝트를 보여줘야 하므로 c를 빈 문자열('')로 바꿔줍니다.
    for (i=0; i < project.length; i++) { // project길이만큼 for문 돌려
        removeClass(project[i], 'show'); //  removeClass 함수를 이용해서 project[i] 요소에서 'show' 클래스를 제거합니다.
        if (project[i].className.indexOf(c) > -1 ) {  //만약, project[i] 요소의 클래스명에 c('all', 'Front', 'Back', 'AI')이 존재하면 다음 코드를 실행합니다.
            addClass(project[i], 'show'); // addClass 함수를 이용해서 project[i] 요소에 'show' 클래스를 추가합니다.
        }
    }
}
function addClass(element, name){
    let i, arr1, arr2;
    arr1 = element.className.split(' '); // element 요소의 클래스명을 공백 문자를 기준으로 분리한 배열을 arr1 변수에 할당합니다.
    arr2 = name.split(' '); // name 매개변수에 전달된 클래스명을 공백 문자를 기준으로 분리한 배열을 arr2 변수에 할당합니다.( show )
    for(i=0; i<arr2.length; i++){
        if (arr1.indexOf(arr2[i] == -1)){ // arr1 배열에서 arr2 배열의 i번째 요소를 검색합니다. 만약 arr1 배열에 arr2 배열의 i번째 요소가 없다면, 조건문이 참이 됩니다.
            element.className += ' ' + arr2[i];
            // element 요소의 클래스명에 arr2 배열의 i번째 요소를 추가합니다.
            //이 때, += 연산자를 사용하여 클래스명을 덧붙여주고, 공백 문자를 포함하여 새로운 클래스명을 추가합니다.
        }
    }
}
function removeClass(element, name){
    let i, arr1, arr2;
    arr1 = element.className.split(' ');
    arr2 = name.split(' ');
    for (i=0; i < arr2.length; i++){
        while (arr1.indexOf(arr2[i]) > -1){ //arr1 배열에서 arr2 배열의 i번째 요소를 검색합니다. 만약 arr1 배열에 arr2 배열의 i번째 요소가 있다면, while문이 실행됩니다.
            arr1.splice(arr1.indexOf(arr2[i]), 1); // arr1 배열에서 arr2 배열의 i번째 요소를 제거합니다. (.splice 배열요소 제거 메소드)
        }
    }
    element.className = arr1.join(' '); //arr1 배열을 공백 문자로 이어진 문자열로 변환한 후, element.className에 할당합니다. 이 때, join() 함수를 사용하여 배열의 모든 요소를 연결합니다.
}




// 4. home을 벗어나면 화살표 버튼이 활성화되고 화살표 버튼을 누르면 home으로 이동 (숨겨놨던 버튼 등장)
const btn = document.getElementsByClassName('arrow-up');
window.addEventListener('scroll', () => {
    const home = document.querySelector('#home');
    if (window.scrollY > home.offsetTop + home.offsetHeight) {
        for(let i=0; i < btn.length; i++){
            btn[i].classList.add('visible')
        }
    } else {
        for(let i=0; i < btn.length; i++){
            btn[i].classList.remove('visible')
        }
    }
});