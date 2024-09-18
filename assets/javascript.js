function resetButtonSelects(){
    document.getElementById('fight').classList.remove('selected');
    document.getElementById('hotel').classList.remove('selected');

}


function selectFight(btn){
    resetButtonSelects();
    btn.classList.add('selected');
    // content fight button
    contentFight = document.getElementById('packet__main-item');

    content = `
       <div class="main__nav_fight">
        <div class="opiton__living">
          <div class="option__from">
            <p>Living From</p>
            <h4>Dubai</h4>  
          </div>       
          <img id="img__airlane" src="./assets/img/img__travel/Airplane Mode On.png" alt="">
          <div class="option__go">
            <p>Going To</p>
            <h4>Dubai</h4> 
          </div>
        </div>

<!--  thẻ dành cho khách hàng booking hotel -->
        <div class="option__living_date">
          <div class="option__date__first">
              <p id="date__text">Leave 
                <img id="img__fight_first" src="./assets/img/img__travel/fight__leave.png" alt="">
              </p>
              <h4> 31/12/24</h4>
          </div>

              <button class="date__btn">
                <img id="img__fight_date" src="./assets/img/img__travel/option_date.png" alt="">
              </button>

          <div class="option__date__last">
            <p id="date__text">Return
              <img id="img__fight_last" src="./assets/img/img__travel/fight__return.png" alt="">
            </p>
            <h4>31/12/24</h4>
          </div>
        </div>

        <div class="option__btn_search">
          <img class="btn_group_14" src="./assets/img/img__travel/Group 14.svg" alt="">
        </div>`;

        contentFight.innerHTML = content;
}

function selectHotel(btn) {
    resetButtonSelects();
    btn.classList.add('selected');
    
    contentHotel = document.getElementById('packet__main-item')
  
    content =`
     <div class="main__nav_fight packet__main-item">
    <div class="container_bilde">
        <div class="container-text">
          <h2>Find the best deals
            3,000,000+ hotels, apartments, villas and more…
            </h2>
        </div>

        <div class="container__box-item">
          <form action="#">
            <div class="booking-field input-destination">
                <input list="destinations" id="destination" name="destination" placeholder="Enter a destination">
                <datalist id="destinations">
                    <option value="Paris, France">
                    <option value="New York, USA">
                    <option value="Tokyo, Japan">
                    <option value="Sydney, Australia">
                    <option value="Bali, Indonesia">
                    <option value="Rome, Italy">
                    <option value="London, UK">
                </datalist>
            </div>
        </form>
        <form action="#">
        <div class="booking-field input-container">
            <!-- <label for="daterange">Select your stay:</label> -->
            <input  type="text" id="daterange" name="daterange" placeholder="Check-in and check-out dates">
        </div>
       </form>

       <div class="booking-field">
        <!-- <label for="guests">Total Guests (Adults & Children)</label> -->
        <select id="guests" name="guests">
            <option value="1">1 Person</option>
            <option value="2">2 People</option>
            <option value="3">3 People</option>
            <option value="4">4 People</option>
            <option value="5">5 People</option>
            <option value="6">6 People</option>
            <option value="7">7 People</option>
            <option value="8">8 People</option>
        </select>
    </div>
           <div class="booking-field">
          <img class="btn--field" src="./assets/img/img__travel/Group 14.svg" alt="">
        </div>


              </div>
          </div>
      </div>
    `;
    contentHotel.innerHTML = content;

    flatpickr("#daterange", {
        mode: "range",
        minDate: "today",
        dateFormat: "Y-m-d",
        onClose: function(selectedDates, dateStr, instance) {
            console.log("Selected dates:", dateStr); // Check selected dates
        }
    });
}



// content select hotel button
// Get all column elements
function resetButtons() {
    // Lấy tất cả các nút
    const buttons = document.querySelectorAll('.btn__select_item');
    // Loại bỏ lớp "active_select" khỏi tất cả các nút
    buttons.forEach(btn => {
        btn.classList.remove('active_select');
    });

}


function selectTeam(button) {
    resetButtons(); 
    button.classList.add('active_select'); 
    contentFrist = document.getElementById('row__colunm__list');
    // Thay đổi nội dung thẻ
    const content = `
        <div class="colunm_item">
            <div class=" package__item--first">
                <img class="package__image" src="./assets/img/img__travel/hoteL__team.jfif" alt="">
                <span class="package__date">14 FEB 2022</span>
                <div class="package__description">
                    <span class="package__title">Relax</span>
                    <span class="package__duration">3 Days, 3 Nights</span>
                </div>
                <div class="package__name">Loga Sea</div>
                <div class="package__price">400$</div>
                <div class="package__cta">Book Now</div>
            </div>
             <div class=" package__item--second">
                <img class="package__image" src="./assets/img/img__travel/hoteL__team01.jfif" alt="">
                <span class="package__date">18 JUN 2022</span>
                <div class="package__description">
                    <span class="package__title">Relax</span>
                    <span class="package__duration">3 Days, 3 Nights</span>
                </div>
                <div class="package__name">Ansgar Scheffold</div>
                <div class="package__price">340$</div>
                <div class="package__cta">Book Now</div>
            </div>
                <div class=" package__item--third">
                <img class="package__image" src="./assets/img/img__travel/hoteL__team02.jfif" alt="">
                <span class="package__date">22 DEC 2022</span>
                <div class="package__description">
                    <span class="package__title">Relax</span>
                    <span class="package__duration">3 Days, 3 Nights</span>
                </div>
                <div class="package__name">Lona X</div>
                <div class="package__price">350$</div>
                <div class="package__cta">Book Now</div>
            </div>
        </div>`;
    
        contentFrist.innerHTML = content;
}
// console.log(selectTeam);

function selectCouple(button) {
    resetButtons(); 
    button.classList.add('active_select'); 
    contentSecondary = document.getElementById('row__colunm__list');
    const content = `
         <div class="colunm_item">
            <div class=" package__item--first">
                <img class="package__image" src="./assets/img/img__travel/hoteL__team01.jfif" alt="">
                <span class="package__date">14 FEB 2022</span>
                <div class="package__description">
                    <span class="package__title">Relax</span>
                    <span class="package__duration">3 Days, 3 Nights</span>
                </div>
                <div class="package__name">Loga Sea</div>
                <div class="package__price">400$</div>
                <div class="package__cta">Book Now</div>
            </div>
             <div class=" package__item--second">
                <img class="package__image" src="./assets/img/img__travel/hoteL__team01.jfif" alt="">
                <span class="package__date">18 JUN 2022</span>
                <div class="package__description">
                    <span class="package__title">Relax</span>
                    <span class="package__duration">3 Days, 3 Nights</span>
                </div>
                <div class="package__name">Ansgar Scheffold</div>
                <div class="package__price">340$</div>
                <div class="package__cta">Book Now</div>
            </div>
                <div class=" package__item--third">
                <img class="package__image" src="./assets/img/img__travel/hoteL__team01.jfif" alt="">
                <span class="package__date">22 DEC 2022</span>
                <div class="package__description">
                    <span class="package__title">Relax</span>
                    <span class="package__duration">3 Days, 3 Nights</span>
                </div>
                <div class="package__name">Lona X</div>
                <div class="package__price">350$</div>
                <div class="package__cta">Book Now</div>
            </div>
        </div>`;
        contentSecondary.innerHTML = content
    
}

function selectFamily(button) {
    resetButtons();
    button.classList.add('active_select'); 
   contentThirty =  document.getElementById('row__colunm__list');
    const content = `
         <div class="colunm_item">
            <div class=" package__item--first">
                <img class="package__image" src="./assets/img/img__travel/hoteL__team.jfif" alt="">
                <span class="package__date">14 FEB 2022</span>
                <div class="package__description">
                    <span class="package__title">Relax</span>
                    <span class="package__duration">3 Days, 3 Nights</span>
                </div>
                <div class="package__name">Loga Sea</div>
                <div class="package__price">400$</div>
                <div class="package__cta">Book Now</div>
            </div>
             <div class=" package__item--second">
                <img class="package__image" src="./assets/img/img__travel/hoteL__team01.jfif" alt="">
                <span class="package__date">18 JUN 2022</span>
                <div class="package__description">
                    <span class="package__title">Relax</span>
                    <span class="package__duration">3 Days, 3 Nights</span>
                </div>
                <div class="package__name">Ansgar Scheffold</div>
                <div class="package__price">340$</div>
                <div class="package__cta">Book Now</div>
            
        </div>`;
    
   contentThirty.innerHTML = content
}
// Hàm hoạt động Recommend destination

function defaultBtns() {
    document.getElementById('item-populor').classList.remove('active_select');
    document.getElementById('item-adventure').classList.remove('active_select');
    document.getElementById('item-beath').classList.remove('active_select');

}   


function clickTargetFirst(btn) {
    defaultBtns()
    btn.classList.add('active_select'); 
    TarGet = document.getElementById('aside__content_box');
    // Thay đổi nội dung thẻ
    const content = `
    <div class="packet__destination-box-1">
          <div class="packet__destination-img">
            <img id="packet__destination-img" src="./assets/img/img__travel/descript_hotel00.jfif" alt="">
          </div>
          <div class="rating"><span><img src="./assets/img/img__travel/star_nav.png" alt=""></span> 4.5</div> 
          <h2>Kina Mountain</h2>
          <p><i class="fa-solid fa-location-dot"></i> Cambodia</p>
        </div>
        <!--box-2  -->
        <div class="packet__destination-box-2">
          <div class="packet__destination-img">
            <img id="packet__destination-img" src="./assets/img/img__travel/descript_hotel01.jfif" alt="">
          </div>
          <div class="rating"><span><img src="./assets/img/img__travel/star_nav.png" alt=""></span> 4.5</div> 
          <h2>Kina Mountain</h2>
          <p><i class="fa-solid fa-location-dot"></i> Cambodia</p>
        </div>
        <!-- box-3 -->
        <div class="packet__destination-box-3">
          <div class="packet__destination-img">
            <img id="packet__destination-img" src="./assets/img/img__travel/descript_hotel03.jfif" alt="">
          </div>
          <div class="rating"><span><img src="./assets/img/img__travel/star_nav.png" alt=""></span> 4.5</div> 
          <h2>Kina Mountain</h2>
          <p><i class="fa-solid fa-location-dot"></i> Cambodia</p>
        </div>
        <!-- box-4 -->
        <div class="packet__destination-box-4">
          <div class="packet__destination-img">
            <img id="packet__destination-img" src="./assets/img/img__travel/descript_hotel04.jfif" alt="">
          </div>
          <div class="rating"><span><img src="./assets/img/img__travel/star_nav.png" alt=""></span> 4.5</div>  
          <h2>Kina Mountain</h2>
          <p><i class="fa-solid fa-location-dot"></i> Cambodia</p>
        </div>
    `;

    TarGet.innerHTML = content;

}
function clickTargetSecond(btn) {
    defaultBtns(); 
    btn.classList.add('active_select'); 
    TarGet = document.getElementById('aside__content_box');
    // Thay đổi nội dung thẻ
    const content = `
    <div class="packet__destination-box-1">
          <div class="packet__destination-img">
            <img id="packet__destination-img" src="./assets/img/img__travel/descript_hotel01.jfif" alt="">
          </div>
          <div class="rating"><span><img src="./assets/img/img__travel/star_nav.png" alt=""></span> 4.5</div> 
          <h2>Kina Mountain</h2>
          <p><i class="fa-solid fa-location-dot"></i> Cambodia</p>
        </div>
        <!--box-2  -->
        <div class="packet__destination-box-2">
          <div class="packet__destination-img">
            <img id="packet__destination-img" src="./assets/img/img__travel/descript_hotel01.jfif" alt="">
          </div>
          <div class="rating"><span><img src="./assets/img/img__travel/star_nav.png" alt=""></span> 4.5</div> 
          <h2>Kina Mountain</h2>
          <p><i class="fa-solid fa-location-dot"></i> Cambodia</p>
        </div>
        <!-- box-3 -->
        <div class="packet__destination-box-3">
          <div class="packet__destination-img">
            <img id="packet__destination-img" src="./assets/img/img__travel/descript_hotel01.jfif" alt="">
          </div>
          <div class="rating"><span><img src="./assets/img/img__travel/star_nav.png" alt=""></span> 4.5</div> 
          <h2>Kina Mountain</h2>
          <p><i class="fa-solid fa-location-dot"></i> Cambodia</p>
        </div>
        <!-- box-4 -->
        <div class="packet__destination-box-4">
          <div class="packet__destination-img">
            <img id="packet__destination-img" src="./assets/img/img__travel/descript_hotel01.jfif" alt="">
          </div>
          <div class="rating"><span><img src="./assets/img/img__travel/star_nav.png" alt=""></span> 4.5</div>  
          <h2>Kina Mountain</h2>
          <p><i class="fa-solid fa-location-dot"></i> Cambodia</p>
        </div>
    `;

    TarGet.innerHTML = content;

}



const feedbackItems = document.querySelectorAll('.last__box_item');
let currentIndex = 0;

// Hàm để hiển thị tối đa 2 feedback
function showFeedbacks() {
    feedbackItems.forEach((item, index) => {
        item.classList.remove('active');
        if (index >= currentIndex && index < currentIndex + 2) {
            item.classList.add('active');
        }
    });
}

// Hiển thị feedback ban đầu
showFeedbacks();

document.getElementById('nextBtn').addEventListener('click', function () {
    // Tăng chỉ số nhưng không vượt quá số lượng feedback
    if (currentIndex + 2 < feedbackItems.length) {
        currentIndex++;
        showFeedbacks();
    }
});

document.getElementById('prevBtn').addEventListener('click', function () {
    // Giảm chỉ số nhưng không nhỏ hơn 0
    if (currentIndex > 0) {
        currentIndex--;
        showFeedbacks();
    }
});



// over layout open and close 


function openNav() {
    document.getElementById("myNav").style.height = "100%";
  }
  
  function closeNav() {
    document.getElementById("myNav").style.height = "0%";
  }
  