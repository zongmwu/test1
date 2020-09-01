//取得所有class名稱為tab的元素
//querySelectorAll:query選擇器，遍歷()裡面的所有元素
document.querySelectorAll(".tab").forEach(
  //為每一個元素加上(當滑鼠移過去)的事件
  function (tab, index) {
    tab.addEventListener("mouseover", function () {

      //=========切換tab===========

      //取得class名稱包含(.tab)還有(.active)的元素，將active從calss名稱移除
      //classList:取得該元素的class名稱
      document.querySelector(".tab.active").classList.remove("active");

      //將現在這個元素新增active到class名稱
      tab.classList.add("active");

      //===========================

      //=========切換圖片與文字區塊===

      //取得class名稱包含(.box)還有(.active)的元素，將active從calss名稱移除
      document.querySelector(".box.active").classList.remove("active");

      //取得tab切換的那筆文字與區塊顯示出來
      //取得class名稱為(.box)對應的圖片與文字區塊，新增active到class名稱
      document.querySelectorAll(".box")[index].classList.add("active");

      //===========================
    });
  }
);
