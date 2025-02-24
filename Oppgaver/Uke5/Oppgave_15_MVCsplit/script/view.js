function updateView() {
    document.getElementById('app').innerHTML = /*HTML*/ `
    <div id="textbox" class="textbox">Det var en gang en ${storysize} ${storyprotag} som ville ${storyverb} ${storyobj} - Ja ja, tror ${storypronoun} er morsom ${storypronoun}?</div>
    <br>
    <div class="buttonbox">
        <button onclick="sizeChoice('liten')">liten</button>
        <button onclick="sizeChoice('stor')">stor</button>
        
        <button onclick="protagChoice('mann')">mann</button>
        <button onclick="protagChoice('dame')">dame</button>
        
        <button onclick="verbChoice('dra til')">dra til</button>
        <button onclick="verbChoice('rane')">rane</button>
        
        <button onclick="objChoice('banken')">banken</button>
        <button onclick="objChoice('bestemor')">bestemor</button>
        
    </div>
    `;
}