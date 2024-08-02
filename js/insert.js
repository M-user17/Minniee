// document.getElementById('backgroundMusic').muted = false
let containerContent = document.querySelector('.container-content')
let usernameContainer = document.getElementById('username')
let passwordContainer = document.getElementById('passwordContainer')
let emailContainer = document.getElementById('emailContainer')
let favoriteContainer = document.getElementById('favoritefood')
let selectnamex = document.getElementById('checkSelect')
let errorForm = document.getElementById('errorForm')
let nameX = document.getElementById('namex')

usernameContainer.addEventListener('keyup', function (event) {
  if (event.key === 'Enter') {
    checkUsername()
  }
})

passwordContainer.addEventListener('keyup', function (event) {
  if (event.key === 'Enter') {
    checkBirthday()
  }
})

emailContainer.addEventListener('keyup', function (event) {
  if (event.key === 'Enter') {
    checkEmail()
  }
})
nameX.addEventListener('keyup', function (event) {
  if (event.key === 'Enter') {
    CheckEx()
  }
})

function checkUsername() {
  let username = document.querySelector('.usernameInput').value
  if (username.trim() === 'Nguyễn Thị Thắm') {
    passwordContainer.classList.remove('hiden')
    usernameContainer.disabled = true
    usernameContainer.classList.add('hiden')
    setRandomImageBirthday()
  } else {
    showErrorForm()
  }
}
function checkBirthday() {
  let password = document.getElementById('birthday').value
  if (password.trim() === '03/08/2003') {
    setImageTim()

    emailContainer.classList.remove('hiden')
    passwordContainer.disabled = true
    passwordContainer.classList.add('hiden')
  } else {
    showErrorForm()
  }
}
function checkEmail() {
  let email = document.getElementById('email').value
  if (email.trim() === '4768496231974001') {
    favoriteContainer.classList.remove('hiden')
    emailContainer.disabled = true
    emailContainer.classList.add('hiden')
    setImageEat()
  } else {
    showErrorForm()
  }
}
function checkFavorite() {
  var selectedFavoriteFoods = document.querySelectorAll(
    'input[name="favoritefood"]:checked'
  )

  if (selectedFavoriteFoods.length > 0) {
    var selectedFoodValues = Array.from(selectedFavoriteFoods).map(
      (checkbox) => checkbox.value
    )

    if (
      selectedFoodValues.length === 3 &&
      selectedFoodValues.includes('tom') &&
      selectedFoodValues.includes('socola') &&
      selectedFoodValues.includes('kem')
    ) {
      favoriteContainer.classList.add('hiden')
      favoriteContainer.disabled = true
      selectnamex.classList.remove('hiden')
      setImageWhite()
    } else {
      swal({
        title: 'Sai hoặc thiếu thông tin rùiii!',
        icon: imageSourcesEr[getRandomIndex(imageSourcesEr)]
      })
    }
  } else {
    swal({
      title: 'Bạn nhỏ quên chưa chọn rồi :((',
      icon: imageSourcesEr[getRandomIndex(imageSourcesEr)]
    })
  }
}

function CheckEx() {
  let namex1 = document.getElementById('namex').value
  if (namex1.trim() === '') {
    swal({
      title: 'Bạn nhỏ cứ nói tên nó ra để tui xử nó'
    })
  } else {
    selectnamex.classList.add('hiden')
    window.location.href = 'button.html'
  }
}

function showErrorForm() {
  setRandomImageEr()
  errorForm.style.top = '20%'
  errorForm.classList.add('fe')
  setTimeout(function () {
    containerContent.classList.add('hiden')
  }, 1000)

  // setTimeout(function () {
  //   setRandomImageEr()

  // }, 10)
}

function hideErrorForm() {
  errorForm.classList.add('feh')
  errorForm.style.top = '-100vh'
  containerContent.classList.remove('hiden')
  // setRandomImageEr()
}

// ảnh từng form
var imageElement = document.getElementById('randomimg')
function setRandomImageHello() {
  var randomImageSource = './img/helo.png'

  imageElement.src = randomImageSource
}
function setRandomImageBirthday() {
  var randomImageSourceBirthday = './img/bd.png'
  imageElement.src = randomImageSourceBirthday
}

function setImageEat() {
  var randomImageSourceEat = './img/eat.png'
  imageElement.src = randomImageSourceEat
}
function setImageTim() {
  var randomImageSourceTim = './img/tim.png'
  imageElement.src = randomImageSourceTim
}
function setImageWhite() {
  var randomImageSourceWhite = './img/white.png'
  imageElement.src = randomImageSourceWhite
}
setRandomImageHello()

//random ảnh form lỗi
var imageSourcesEr = [
  './img/Errorcat/1.png',
  './img/Errorcat/2.png',
  './img/Errorcat/3.png',
  './img/Errorcat/4.png',
  './img/Errorcat/5.png',
  './img/Errorcat/6.png',
  './img/Errorcat/7.png',
  './img/Errorcat/8.png',
  './img/Errorcat/9.png'
]

var imageElementEr = document.getElementById('randomimger')
function getRandomIndex(arr) {
  return Math.floor(Math.random() * arr.length)
}

function setRandomImageEr() {
  var randomIndex = getRandomIndex(imageSourcesEr)
  var randomImageSource = imageSourcesEr[randomIndex]
  imageElementEr.src = randomImageSource
}
