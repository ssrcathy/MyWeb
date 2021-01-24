$(function(){

    let nav = `<nav class="demos" style="position: fixed">
					<a class="demo" href="index.html" id="index">首页</a>					
					<a class="demo" href="work.html" id="index3">作品</a>
					<a class="demo" href="study.html" id="index3">学习</a>
					<a class="demo" href="read.html" id="index3">读书</a>
					<a class="demo" href="blog.html" id="index3">博客</a>
					<a class="demo" href="person.html" id="person">个人</a>
				</nav>
				<a class="pater" href="index.html">
					<svg class="pater__deco" width="300" height="240" viewBox="0 0 1000 800">
						<path d="M27.4,171.8C73,42.9,128.6,1,128.6,1s0,0,0,0c58.5,0,368.3,0.3,873.2,0.8c38.5,211,42.1,373.5,38.9,476.7c-2.5,80.3-10.6,174.9-76.7,247.8c-15.1,16.6-37.4,41.2-72.8,53.9c-92.4,33.1-173-50.8-283.9-99.4c-224.3-98.4-334.9,51.4-472.2-45.6C-6.3,535.2-14.5,290.6,27.4,171.8z"/>
					</svg>
					<img class="pater__img" src="img/ly.png" alt="刘跃logo" style="width: 100px" />
					<p class="pater__desc">一个前端工程师的自我展示，
					 该网站仅用于学习与交流
					</p>
					
				</a>`
    $('.nav').html(nav);

    let smallNav = `<nav id="gooey-v" style="max-width: 80px">
					<input type="checkbox" class="menu-open" name="menu-open4" id="menu-open4"/>
					<label class="open-button" for="menu-open4">
						<span class="burger burger-1"></span>
						<span class="burger burger-2"></span>
						<span class="burger burger-3"></span>
					</label>
					<a href="#" class="gooey-menu-item">首页</a>
					<a href="#" class="gooey-menu-item">个人</a>
					<a href="#" class="gooey-menu-item">作品</a>
					<a href="#" class="gooey-menu-item">学习</a>
					<a href="#" class="gooey-menu-item">读书</a>
					<a href="#" class="gooey-menu-item">博客</a>
				</nav>`
    $('.main-menu').html(smallNav);
    $("#gooey-v").gooeymenu({
        bgColor: "#202692",
        contentColor: "white",
        style: "vertical",
        horizontal: {
            menuItemPosition: "glue"
        },
        vertical: {
            menuItemPosition: "spaced",
            direction: "down"
        },
        circle: {
            radius: 90
        },
        margin: "small",
        size: 60,
        bounce: true,
        bounceLength: "small",
        transitionStep: 100,
        hover: "#ffcccc"
    });

    $('.demos').click(function (e) {
        let event =  e||window.event;
        let target = e.target ||e.srcElement;
        event.preventDefault();
        let url = e.target.href;
        console.log(e);
        window.location.href =url;
        if (target.nodeName.toLocaleLowerCase() == 'a'){
            $('.demo').removeClass('demo--current');
            switch (target.id) {
                case 'index':
                    console.log('index');
                    console.log($(this));
                    break;
                case 'person':
                    console.log('person');

                    break;
                case 'index3':
                    console.log('index3');
                    break;


            }
        }
        return false;
        // console.log(e.target)
        // e.target.classList.push('demo--current');



    })

})
