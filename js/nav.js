$(function(){

    let nav = `<nav class="demos" style="position: fixed">
					<a class="demo" href="index.html" id="index">首页</a>
					<a class="demo" href="person.html" id="person">个人</a>
					<a class="demo" href="index3.html" id="index3">作品</a>
					<a class="demo" href="index3.html" id="index3">学习</a>
					<a class="demo" href="index3.html" id="index3">读书</a>
					<a class="demo" href="index3.html" id="index3">博客</a>
				</nav>
				<a class="pater" href="#">
					<svg class="pater__deco" width="300" height="240" viewBox="0 0 1000 800">
						<path d="M27.4,171.8C73,42.9,128.6,1,128.6,1s0,0,0,0c58.5,0,368.3,0.3,873.2,0.8c38.5,211,42.1,373.5,38.9,476.7c-2.5,80.3-10.6,174.9-76.7,247.8c-15.1,16.6-37.4,41.2-72.8,53.9c-92.4,33.1-173-50.8-283.9-99.4c-224.3-98.4-334.9,51.4-472.2-45.6C-6.3,535.2-14.5,290.6,27.4,171.8z"/>
					</svg>
					<img class="pater__img" src="img/ly.png" alt="刘跃logo" style="width: 100px" />
					<p class="pater__desc">一个前端工程师的自我展示</p>
				</a>`
    $('.content--fixed').html(nav);

    $('.demos').click(function (e) {
        let event =  e||window.event;
        let target = e.target ||e.srcElement;
        event.preventDefault();
        let url = e.target.href;
        console.log(e);
        // window.history.pushState(null,null,url);
        window.location.href =url;
        // $(this).addClass('demo--current');
        // $(this).attr('preserveAspectRatio',"none");
        if (target.nodeName.toLocaleLowerCase() == 'a'){
            $('.demo').removeClass('demo--current');
            // $('.decoshape').attr('preserveAspectRatio','')
            switch (target.id) {
                case 'index':
                    console.log('index');
                    console.log($(this));
                    // $(this).addClass('demo--current');
                    // $(this).attr('preserveAspectRatio',"none");
                    break;
                case 'person':
                    console.log('person');
                    // $(this).addClass('demo--current');
                    break;
                case 'index3':
                    // $(this).addClass('demo--current');
                    console.log('index3');
                    break;


            }
        }
        return false;
        // console.log(e.target)
        // e.target.classList.push('demo--current');



    })

})
