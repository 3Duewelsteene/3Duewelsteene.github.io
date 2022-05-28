# **[3Duewelsteene](https://3duewelsteene.github.io/)** - A website for the 3D visualization of the megalithic passage grave Düwelsteene near Heiden in Westphalia, Germany

**built with HTML, CSS and JavaScript and
with the help of [Bootstrap](https://getbootstrap.com/) and [3DHOP](https://github.com/cnr-isti-vclab/3DHOP)**

---

## **Licenses**

### -> 3D Viewer (by [3DHOP](https://github.com/cnr-isti-vclab/3DHOP)) : [GNU 3.0](https://www.gnu.org/licenses/gpl-3.0.en.html)

### -> Images marked as LWL-Altertumskommission für Westfalen belong to the Altertumskommission für Westfalen, Landschaftsverbands Westfalen-Lippe (LWL) and **are copyright protected**

### -> all other images and 3D models : [CC BY-NC 4.0](https://creativecommons.org/licenses/by-nc/4.0//)

---

## **Context**

The megalithic passage grave Düwelsteene is one of the most southwestern graves of the Funnelbeaker culture still in existance. Through ceramic finds and  radiocarbon dating of a skull fragment found in the grave, the utilization of the grave can be dated from 3300 BC to 2600 BC.

In 1932 after excavations under archaeological and scientific supervision, the grave was restored to the appearence it was thought to have had, with the information that was available at the time. While moving the stones makes the passage grave look composed and gives visitors an idea how the grave could have looked, it also made it harder to digitally reconstruct the passage grave, because nowadays the megalithic stones cannot be found in their in situ placement.

---

## **Methods**

With new technology the appearance of the grave has now been send back trough time and is displayed as 3D models on the website. Through Structure from Motion (SfM) the passage grave was digitized and transformed to a 3D model. The SfM 3D model is visualized and shows the current appearence of the grave.

Through a citizen science project and the help of the residents of Heiden and its surroundings, photographs could be collected of the Duewelsteene and the placement of the stones before the restoration in 1932. Using the SfM model, the megalithic stones were extracted and the holes in the mesh were closed using the Poisson Surface Reconstruction in the Software [CloudCompare](https://www.cloudcompare.org/). These individual stones were then placed in the 3D software [Blender](https://www.blender.org/) and with the help of the photographs, the megalithic stones could be "turned back" and a reconstruction of the passage grave before the restoration could be built.

As a last 3D model the still existing megalithic stones from the 3D model of the passage grave were used to build a reconstruction that shows how the grave could have looked around 3000 BC. Through scientific research and comparisons to similar passage graves in [Germany](https://www.altertumskommission.lwl.org/de/forschung/megalithik/) and the [Netherlands](https://hunebeddeninfo.nl/), the 3D model was built in Blender. To differentiate the still existing stones from the added reconstructed objects, the added stones were built in low-poly style and have a visible wire frame overlay.

---

## **Code**

The website was built using Bootstrap. The most interesting part, the 3D viewer was built by using [3DHOP](https://www.3dhop.net/), the 3D Heritage Online Presenter by the [Visual Computing Laboratory](http://vcg.isti.cnr.it/). The open-source software package was used to visualize the different 3D models of the passage grave through time.

Some features were changed or added to fit the context and presentation.

The changes are listed here:

- Hotspots / Annotations
- Button to reveal/disable second model in scene
- Button to show information about the 3D model (Metadata)

## Hotspots

- using the Hotspot feature from 3DHOP, the alert that will present you the information of the "Hotspot" is a simple JavaScript alert box, which displays a pop-up window. This window can show the message that is written into the JavaScript alert function, but you can't change the style, add images or other elements to the pop-up window. The solution was a JavaScript code which is connected to Bootstrap modals, which makes it possible to style and change the pop-up windows of the Hotspots depending on what you want your annotations to show. The idea of the code structure was taken from the user [Iro Boutsi](https://github.com/IroMp) and can be found [here](https://github.com/IroMp/3dhop-threejs-demo/blob/master/js/hotspotsinfo.js). The code I wrote is not perfect, but it works, here is an example of the JavaScript file:

```javascript
function setInfo(hotspot){

 switch (hotspot){
  case 1:
      var modal = document.getElementById("Grabeingang");
    modal.style.display = "block";
    
    //close modal, when left-click on modal
    modal.onclick = function() {
        modal.style.display = "none";
    }
    
    //close modal when left-click somewhere in window
    window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    }
  break;

    case 2:
      var modal = document.getElementById("Bodenpflaster");
    modal.style.display = "block";
    
    modal.onclick = function() {
        modal.style.display = "none";
    }
    
    window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    }
  break;

    //and so on, each hotspot has a corresponding case

    default:
      modal.style.display = "none";
        break;
 }

}
```

- closing the modal didn't work as I hoped it would, which I bypassed by changing the code, so the modal closes, whenever the user clicks somewhere in the window or on the modal itself. The X or closing button does nothing...

- this is then combined with a Bootstrap modal, which is placed in the body of the HTML file. The modal can be styled and filled with the information, that the Hotspot/annotation directs towards.

```html
<div id="Grabeingang" class="modal">
      <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header bg-light">
                    <h5 class="modal-title">Grabeingang</h5>
                    <h3 class="closeModal">&times;</h3>
                </div>
                <div class="modal-body">
                    <p>Hier könnte besispielsweise 
                    der Eingang zum Grab gelegen haben. 
                    Nachweise für den Eingang bei den
                    Düwelsteenen gibt es leider keine.</p>
                </div>
            </div>
      </div>
</div>
```

## reveal/disable second model

- to show the inner and outer part of the reconstructed megalithic grave, different navigation buttons from 3DHOP were repurposed to make a second 3D model appear or disappear in the 3D viewer, as well as disable other models. The icons were also changed to better fit the topic.

```html
<img id="layer_on" title="Disable Outer Layer" src="skins/dark/hill_on.png"
  style="position:absolute; visibility:hidden;" />
<img id="layer" title="Enable Outer Layer" src="skins/dark/hill.png" /><br />
```

- the modelInstance of the added 3D object was defined as not visible at the start (visible:false). The code of the actionsToolbar function was changed:

```javascript
function actionsToolbar(action) {
    if (action == 'home') presenter.resetTrackball(), sectiontoolReset(), layerReset();
    // other toolbar features
    else if (action == 'layer' || action == 'layer_on') { presenter.toggleInstanceVisibilityByName('Outer', true); layerSwitch(); }
}
```

- a new function was added to the init.js script, to reset the model when the user clicks on the Home button.
Now when clicking the Home button, the 3D model resets to its starting position, the second added model disappears and also the toolbar is reset.

```javascript
function layerSwitch(on) {
  if(on === undefined) on = jQuery('#layer').css("visibility")=="visible";

  if(on) {
 jQuery('#layer').css("visibility", "hidden");
 jQuery('#layer_on').css("visibility", "visible");
  }
  else {
 jQuery('#layer_on').css("visibility", "hidden");
 jQuery('#layer').css("visibility", "visible");
  }
}

function layerReset(on) {
  if(on === undefined) on = jQuery('#layer').css("visibility")=="hidden";

  if(on) {
  jQuery('#layer').css("visibility", "visible");
  jQuery('#layer_on').css("visibility", "hidden");

  }
  else {
  jQuery('#layer_on').css("visibility", "hidden");
  jQuery('#layer').css("visibility", "visible");

  }
  presenter.setInstanceVisibilityByName('Outer', false, true);
}
```

- these changes of the buttons and functions were done on the reconstruction model of 1932 to let the viewer see the certainty, with which the stones were positioned, as well as on the reconstruction model from 3000 BC, to let the user see how the reconstructed grave could look like with a hill covering the tomb.

## show information

- to be able to view all metadata concerning the models, I have collected them in a table, that can be accessed with the information button, which is part of the navigation menu in the 3D viewer. The button is added in the navigation code of the 3DHOP viewer, the icon was edited to fit the application and through an ID, the button is connected to a Bootstrap modal, which then shows the metadata information:

```html
<!--INFO-->
<img id="info" data-bs-toggle="modal" data-bs-target="#infobox" title="Enable Information"
  src="skins/dark/help.png" /><br />
<!--INFO-->

<!--INFOBOX-->
<div id="infobox" class="modal" tabindex="-1">
    <div class="modal-dialog modal-dialog-scrollable  modal-dialog-centered">
        <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Metadaten</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <table class="table table-striped">
                        <thead>
                            <tr>
                                <th scope="col">Typ</th>
                                <th scope="col">Informationen</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">Software</th>
                                <td>CloudCompare
                                    <br>
                                    MeshLab
                                    <br>
                                    Blender
                                </td>
                            </tr>
                            <!--and so on-->
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
<!--INFOBOX-->
```

---

## **further information**

- [die Teufelssteine bei Heiden (German)](https://www.heiden.de/tourismus-und-freizeit/sehenswuerdigkeiten/die-teufelsteine/)
- [Megalithik in Westfalen (German)](https://www.altertumskommission.lwl.org/de/forschung/megalithik/)
- [PDF: die Düwelsteene (German)](https://www.altertumskommission.lwl.org/media/filer_public/cc/68/cc68f594-62f9-45b5-97d2-f2977e755f3e/mw_3_2018.pdf)
- [Hunebedden in the Netherlands](https://hunebeddeninfo.nl/)
- [Megalithic Routes](https://megalithicroutes.eu/)
- [Strasse der Megalithkultur (German)](http://www.strassedermegalithkultur.de/de/)
- [Digital and Computational Archaeology - University of Cologne](https://dca.uni-koeln.de/en/)
