$(document).ready(function() { 
    $.ajax({ 
        url: "https://api.github.com/repos/nhutgg/nhutgg.github.io/contents/cert", 
        dataType: "json", 
        success: function(data) {
            data.sort(function(a, b) {
                return a.name.localeCompare(b.name); // Sắp xếp theo thứ tự tên chữ cái
            });

            $.each(data, function(index, file) { 
                var fileUrl = file.download_url; 
                var fileName = file.name; 
                var listItem = "<li><a href='" + fileUrl + "' download>" + fileName + "</a></li>"; 
                $("#file-list").append(listItem); 
            });

            $("#file-list").hide().fadeIn(5000);
        } 
    }); 
});
