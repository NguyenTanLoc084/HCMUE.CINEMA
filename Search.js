function searchMovies() {
    const input = document.getElementById("searchInput").value.toLowerCase();
    const movies = [
      { name: "vây hãm: không lối thoát", link: "K1.html" },
      { name: "tri kỷ", link: "K2.html" },
      { name: "trạm tàu ma", link: "K3.html" },
      { name: "quái xế giao hàng", link: "K4.html" },
      { name: "sát thủ nhân tạo 2", link: "K5.html" },
      { name: "đội bóng thiếu lâm", link: "HK1.html" },
      { name: "cửu long thành trại", link: "HK2.html" },
      { name: "cuộc chiến tương lai", link: "HK3.html" },
      { name: "giác quan thứ 6", link: "HK4.html" },
      { name: "sát thủ và vệ sĩ (2009)", link: "HK5.html" },
    ];
  
    // Tìm phim khớp với tên đã nhập
    const result = movies.find(movie => movie.name.includes(input));
  
    if (result) {
      // Chuyển hướng đến liên kết của phim được tìm thấy
      window.location.href = result.link;
    } else {
      // Hiển thị thông báo khi không tìm thấy
      alert("Không tìm thấy phim nào phù hợp. Vui lòng thử lại!");
    }
  }
  