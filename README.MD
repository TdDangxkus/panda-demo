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
  </div>

    

    TÌM HIỂU VỀ THƯ VIỆN PACKET TRONG JS VỀ DATE_TIME

Flatpickr Library:

Sử dụng flatpickr, chúng ta có thể dễ dàng thêm bộ chọn ngày phạm vi (mode: "range") để người dùng chọn ngày check-in và check-out cùng lúc trên một lịch.
Bộ chọn ngày được khởi tạo trên input với id="daterange", và khi người dùng chọn xong ngày, hai ngày này sẽ được hiển thị trong cùng một trường dưới dạng "check-in đến check-out" (ví dụ: 2024-09-10 to 2024-09-15).




*  <script src="https://cdn.jsdelivr.net/npm/flatpickr"></script>
*  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/flatpickr/dist/flatpickr.min.css"> 

Thư viện Flatpickr:


Flatpickr là một thư viện JS giúp quản lý lịch chọn ngày đơn giản, gọn nhẹ và hỗ trợ nhiều tùy chỉnh. Bạn chỉ cần thêm thư viện này vào trang web và khởi tạo nó bằng cách sử dụng flatpickr() với tùy chọn mode: "range".