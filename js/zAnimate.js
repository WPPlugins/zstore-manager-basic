/**

var v = false;
	
	jQuery('.z_listing').hover(function() {
	if (v == false){
		var pos = jQuery(this).position();
		var pos_width = jQuery(this).width();
	    var z = jQuery(this).find('.zoomBox').fadeIn(400);
		var pos_width = jQuery(this).width();

		var minHeight = z.css('min-height');
		z.css('width',pos_width+ pos_width/2);
		var newHeight; 
		var h =  jQuery(this).height();
		switch (pos_width)
		{
		    break;
		case 97: /*small */		
		case 157: /*medium */
		
			break;
		case 215:  /* large */
			h4 = pos_width *1.75;
			break;
		
		}	
		z.css('height',h4);
		var midZlisting = pos_width/2 + p.left;
		var newLeft = midZlisting - z.width()/2;
		p.left = newLeft;
		savedLeft = p.left;
		savedTop = p.top;
		z.css('left', p.left+'px');
		z.css('top', p.top+'px');
		x.width(new_w);
		x.css('display','inline-block');
		x = jQuery(this).find('.zoomClass');	
		x.css('display','inline-block');
		v = true;
	}
}, function() {
	if (v == true){
	jQuery(this).find('.zoomBox').stop().fadeOut(100);
	 jQuery(this).find('.zoomBox').css('left',savedLeft+'px');	
	}
});
}); // end ready