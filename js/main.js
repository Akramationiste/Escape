// java script is used via this links bellow 

{/* <script type="text/javascript" src="//use.typekit.net/wtt0gtr.js"></script>
<script type="text/javascript">try{Typekit.load();}catch(e){}</script> */}



$(document).ready(function() {
    if ($('[data-background]').length > 0) {
      $('[data-background]').each(function() {
        var $background, $backgroundmobile, $this;
        $this = $(this);
        $background = $(this).attr('data-background');
        $backgroundmobile = $(this).attr('data-background-mobile');
        if ($this.attr('data-background').substr(0, 1) === '#') {
          return $this.css('background-color', $background);
        } else if ($this.attr('data-background-mobile') && device.mobile()) {
          return $this.css('background-image', 'url(' + $backgroundmobile + ')');
        } else {
          return $this.css('background-image', 'url(' + $background + ')');
        }
      });
    }
  });