// Récupération du canvas
var canvas = document.getElementById("canvas");

// Initialisation de la scène, de la caméra et du renderer
var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 75, canvas.width / canvas.height, 0.1, 1000 );
var renderer = new THREE.WebGLRenderer({ canvas: canvas });

// Chargement de l'image de produit en texture
var texture = new THREE.TextureLoader().load( "../assets/img/chaise.jpg" );

// Création de l'objet 3D à partir de la texture
var geometry = new THREE.PlaneGeometry(2,2);
var material = new THREE.MeshBasicMaterial( { map: texture } );
var mesh = new THREE.Mesh( geometry, material );

// Ajout de l'objet 3D à la scène
scene.add( mesh );

// Animation de l'objet en modifiant sa rotation
function animate() {
    requestAnimationFrame( animate );
    mesh.rotation.x += 0.01;
    mesh.rotation.y += 0.01;
    renderer.render( scene, camera );
}
animate();
