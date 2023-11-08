$(document).ready(function () {
  var a = false;
  $(".photogallery-section__item").click(function () {
    if (!a) {
      a = true;
      var galleryId = $(this).data("gallery-id");
      var t = "/multimedia/gallery-ajax?gallery_id=" + galleryId;

      $.getJSON(t)
        .done(function (a) {
          $(this).lightGallery({
            hash: false,
            share: false,
            dynamic: true,
            dynamicEl: a,
            index: 0,
            download: false,
            backdropDuration: 500,
          });
        })
        .fail(function (a, r, t) {
          alert("Nastala chyba při načítání galerie. Prosím zkuste to znovu.");
          console.error("getJSON failed, status: " + r + ", error: " + t);
          console.error(a);
        })
        .always(function () {
          a = false;
        });

      return false;
    }
  });
});
