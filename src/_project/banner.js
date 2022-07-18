const banner = {

    init: function () {
        const bannerTitle = document.getElementById('js-banner-logo');
        
        function logoHide() {
          const bannerImg = document.getElementById('js-banner-img');
          
          if(window.scrollY > (bannerImg.clientHeight / 2)) {
              bannerTitle.style.display = 'none';
          } else {
              bannerTitle.style.display = 'block';
          }
        }
        
        document.addEventListener('scroll', () => {
          logoHide();
        });
        
        window.onload = () => {
          logoHide();  
          positionLogo();
        };
        
        // banner logo position
        function positionLogo() {
          const bannerInner = document.getElementById('js-banner-inner');
          let position = bannerInner.clientHeight / 2;
          const mq = window.matchMedia( "(min-width: 768px)" );
          if (mq.matches) {
            bannerTitle.style.top = position + 120 + 'px';
          } else {
            bannerTitle.style.top = position + 30 + 'px';
          }
        }
    }
};

export default banner;