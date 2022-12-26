let profile = document.getElementById("profile");
let profile_small = document.getElementById("profile_small");

jQuery(
        function($)
        {
          $(window).on('scroll', function()
          {
            if(profile.getBoundingClientRect().bottom <= 0)
              {
                profile_small.classList.remove('hide');
                profile_small.classList.add('profile_small');
                profile_small.style.top = '30px';
                profile_small.style.left = profile.getBoundingClientRect().left.toString() + 'px';
                profile_small.style.right = (document.documentElement.clientWidth  - profile.getBoundingClientRect().right).toString() + '0px';
              }
            else{
                profile_small.classList.add('hide');
                 profile_small.classList.remove('profile_small');
                profile_small.style.left = profile.getBoundingClientRect().left.toString() + 'px';
                profile_small.style.right = (document.documentElement.clientWidth  - profile.getBoundingClientRect().right).toString() + '0px';
              }
           })
        }
      );    


let keyArr = '';

document.addEventListener('keydown', function(event) {
  keyArr = keyArr + event.key;
  if (keyArr.includes('MATRIX')){
    matrix_func();
    keyArr = "";
  };
});


const cv = document.getElementById("matrix"),
    ctx = cv.getContext('2d');
    W = (cv.width),
    H = (cv.height);

function matrix_func() {
 
    if (!!ctx) {
        lnk = document.querySelector('link[rel="icon"]');
        tc = setInterval(updateLoader, 123);
    }
};
 
function updateLoader() {
  draw();
  lnk.href= cv.toDataURL('image/png');
}


const str = "А+Б0В-Г1Д=Е2Ё Ж3З И4Й К5Л М6Н О7П Р8С Т9У Ф!Х Ц?Ч Ш.ЩЪ,Ы Ь:ЭЮ;Я",
  matrix = str.split("");

let font = 1,
  col = W / font,
  arr = [];

for (let i = 0; i < col; i++) arr[i] = 1;

function draw() {
  ctx.fillStyle = "rgba(0,0,0,.05)";
  ctx.fillRect(0, 0, W, H);
  ctx.fillStyle = "#0f0";
  ctx.font = font + "px system-ui";
  for (let i = 0; i < arr.length; i++) {
    let txt = matrix[Math.floor(Math.random() * matrix.length)];
    ctx.fillText(txt, i * font, arr[i] * font);
    if (arr[i] * font > H && Math.random() > 0.975) arr[i] = 0;
    arr[i]++;
  }
}
