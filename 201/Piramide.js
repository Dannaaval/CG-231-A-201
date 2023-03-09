/**
 * geometria: construye una geometria THREEJS y la retorna
 * ENTRADAS vx = Arreglo de vertices (arreglo de arreglos)
 * Salida: Geometría generada a partir de vx
 */

function Geometria(vx){
    geom=new THREE.Geometry();
    var vertices = vx.length;
    var largoVertice = vertices.length;
    for (i = 0; i < largoVertice; i++) {
        [x,y,z] = [vx[i][0],vx[i][1],vx[i][2]];
        vector = new THREE.Vector3(x, y, z);
        geom.vertices.push(vector);
    }
    return geom;

}
/**
 * Translacion: construye la matriz de translación THREEJS para el vector vt y la retorna
 * ENTRADAS: vt= Vector de translación (arreaglo de enteros)
 * Salida: matrizT = Matriz de translación para el vector vt
 */
function Translacion(vt){
    var matrizT = new THREE.Matrix4();
    matrizT.set(1, 0, 0, vt[0],
            0, 1, 0, vt(1),
            0, 0, 1, vt[2],
            0, 0, 0, 1);   
    return matrizT;
}  

/**
 * Escalado: construye la matriz de escalado THREEJS para el vector vt y la retorna
 * ENTRADAS: vs= Vector de escalado (arreaglo de enteros)
 * Salida: matrizS = Matriz de tescalado para el vector vs
 */
function Escalado(vs){
var matrizS = new THREE.Matrix4();
matrizS.set(vs[0], 0, 0, 0,
        0, vs[1], 0, 0,
        0, 0, vs[2], 0,
        0, 0, 0, 1);
    return matrizS;
}

/**
 * EscaladoReal: Aplica el vector de escalado vs al objeto fig
 * Entradas: fig = Objeto tipo THREE.Line que representa el objeto grafico
 *          vs = Vector de escalado (arreglo de enteros)
 * SALIDA:
*/
function EscaladoReal(fig, posini, vs){
    tr = [-posini[0],-posini[1], -posimi];//vector para llevar al origen 
    fig.applymATRIX(Translacion(tr));
    fig.applyMatrix(Escalado(vs));
    fig.applyMatrix(translacion(posini));
}

 function init() {
    // Escena
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);    
    renderer = new THREE.WebGLRenderer();
    renderer.setClearColor(0x000000, 1.0);
    renderer.setSize(window.innerWidth, window.innerHeight);

    var size = 700;
    var arrowSize = 40;
    var divisions = 20;
    var origin = new THREE.Vector3( 0, 0, 0 );
    var x = new THREE.Vector3( 1, 0, 0 );
    var y = new THREE.Vector3( 0, 1, 0 );
    var z = new THREE.Vector3( 0, 0, 1 );
    var color2 = new THREE.Color( 0x333333 );  /// 0x333333
    var colorR = new THREE.Color( 0xAA0000 );
    var colorG = new THREE.Color( 0x00AA00 );
    var colorB = new THREE.Color( 0x0000AA );

    //Crear la Grilla
    var gridHelperXZ = new THREE.GridHelper( size, divisions, color2, color2);

    //Flechas
    var arrowX = new THREE.ArrowHelper( x, origin, arrowSize, colorR );
    var arrowY = new THREE.ArrowHelper( y, origin, arrowSize, colorG );
    var arrowZ = new THREE.ArrowHelper( z, origin, arrowSize, colorB );
        
    //Cámara
    camera.position.x = 000;
    camera.position.y = 100;
    camera.position.z = 400;
    camera.lookAt(scene.position);

    //Creación de las Figuras
    //Cuadrado

    lado = 30; //lado base 
    h = 45;
    [v1, v2, v3, v4, v5]= [[0,0,0],[lado,0,lado],[0,0,lado],[lado/2,h,lado/2]];
    
    var vertices = [v1,v2, v3, v4, v5,v1, v4, v3, v5, v2];
    GeopPramide = Geometria(vertices);


    Geometria=new THREE.Geometry();
    var vertices = [[10,10,0], [40,10,0], [40,40,0], [10,40,0], [10,10,0]];
    var largoVertice = vertices.length;
    for (i = 0; i < largoVertice; i++) {
        x = vertices[i][0];
        y = vertices[i][1];
        z = vertices[i][2];
        vector = new THREE.Vector3(x, y, z);
        Geometria.vertices.push(vector);
    }

    // Cuadrado Modificado
    Geometria2=new THREE.Geometry();
    var vertices = [[10,10,0], [40,10,0], [40,40,0], [10,40,0], [10,10,0]];
    var largoVertice = vertices.length;
    for (i = 0; i < largoVertice; i++){
        x = vertices[i][0];
        y = vertices[i][1];
        z = vertices[i][2];
        vector = new THREE.Vector3(x, y, z);
        Geometria2.vertices.push(vector);
    }
    // //Creación de las Figuras
    //Piramide uno
    var vertices = [];
    geomPiramide= Geometria(vertices);
    // Colores para las piramides

    color = [{color:0xf}, {color:0x00ff0}];

    //Material para las piramides

    material = [];
     for (i=0; i<2;i++)
        material.push(new THREE.ParticleBasicMaterial(color[i]));

    Cuadrado = new THREE.Line(Geometria,Material);
    Cuadrado2 = new THREE.Line(Geometria2,Material2); 

    //Figuras para las piramides
    piramide = [];
      for (i=0; i<2;i++)
      piramide.push(new THREE.Line(geomPiramide, material[i]));

//girar la sgunda piramide
//en el documento html
document.body.appendChild(render.domElement);
    // Matriz de Traslación
    var matrizT = new THREE.Matrix4();
    matrizT.set(1, 0, 0, 0,
            0, 1, 0, 0,
            0, 0, 1, 1,
            0, 0, 0, 1);

            Cuadrado2.applyMatrix(matrizT);         

    // Matriz de Escala
    var matrizS = new THREE.Matrix4();
    matrizS.set(5, 0, 0, 0,
            0, 1, 0, 0,
            0, 0, 1, 0,
            0, 0, 0, 1);

            Cuadrado2.applyMatrix(matrizS);

    // Matriz de Rotación
    var matrizR = new THREE.Matrix4();
    var alpha = 30;
    var cs = Math.cos(alpha);
    var ss = Math.sin(alpha);

    matrizR.set(cs,  0, ss, 0,
            0, 1, 0, 0, 
            -ss, 0, cs, 0,
            0, 0, 0, 1);	

            Cuadrado2.applyMatrix(matrizR);

    // En el documento HTML
    document.body.appendChild(renderer.domElement);

    // Agregar elementos al escenario
    scene.add(gridHelperXZ);
    scene.add(arrowX);	
    scene.add(arrowY);	
    scene.add(arrowZ);
    for (i=0; i<2; i++)
scene.add(piramide-[i]);

    renderer.render(scene, camera);
}

init();  // otra forma: window.onload = init;

