
				//variable that will increment through the images
				var step=0
				function slideit(){
				//if browser does not support the image object, exit.
				if (!document.images)
				return
				document.getElementById('slide').src = slideimages[step].src
				document.getElementById('link').href= slideimages[step].href
				if(step<2)
				step++
				else
				step=0
				//call function "slideit()" every 2.5 seconds
				setTimeout("slideit()",2000)
				}
				slideit()
