
        function rectanguloRedondeado(x, y, width, height, radio, titulo) {
            var ctx1 = cargactxCanvas('lienzo_diagramaC1');
            var ctx2 = cargactxCanvas('lienzo_diagramaC2');
            ctx1.fillStyle = 'rgb(122, 201, 241)';
            if (ctx1) {

                ctx1.beginPath();
                ctx1.moveTo(x, y + radio);
                ctx1.lineTo(x, y + height - radio);
                ctx1.quadraticCurveTo(x, y + height, x + radio, y + height);
                ctx1.lineTo(x + width - radio, y + height);
                ctx1.quadraticCurveTo(x + width, y + height, x + width, y + height - radio);
                ctx1.lineTo(x + width, y + radio);
                ctx1.quadraticCurveTo(x + width, y, x + width - radio, y);
                ctx1.lineTo(x + radio, y);
                ctx1.quadraticCurveTo(x, y, x, y + radio);
                ctx1.closePath();
                ctx1.fill();
                ctx1.stroke();
                //ctx2.fillStyle = 'black';
                ctx2.font = "bold 15px sans-serif";
                ctx2.fillText(titulo, x + width / 3.2, y + height / 1.5);
            }
        }

        function cuadroVariable(x, y, width, height, variable) {
            var ctx1 = cargactxCanvas('lienzo_diagramaC1');
            var ctx2 = cargactxCanvas('lienzo_diagramaC2');
            ctx1.fillStyle = 'rgb(122, 201, 241)';
            if (ctx1) {
                tipo = 2;
                //rectangulo
                ctx1.beginPath();
                ctx1.moveTo(x, y);
                ctx1.lineTo(x + width, y);
                ctx1.lineTo(x + width, y + height);
                ctx1.lineTo(x, y + height);
                ctx1.lineTo(x, y);
                ctx1.closePath();
                ctx1.fill();
                ctx1.stroke();

                //lineas horizontales 
                ctx2.moveTo(x, y + 10);
                ctx2.lineTo(x + width, y + 10);
                ctx2.moveTo(x, y + height - 10);
                ctx2.lineTo(x + width, y + height - 10);
                //ctx2.closePath();
                //ctx2.fill();
                ctx2.stroke();
                //ctx2.fillStyle = 'black';
                ctx2.font = "bold 15px sans-serif";
                ctx2.fillText(variable, x + width / 3.2, y + height / 1.5);
            }
        }

        function colocarFlecha(x, y, width) {
            var ctx2 = cargactxCanvas('lienzo_diagramaC2');
            ctx2.fillStyle = 'black';
            if (ctx2) {
                ctx2.beginPath();
                ctx2.moveTo(x + width / 2, y - 20);
                ctx2.lineTo(x + width / 2, y);
                ctx2.moveTo(x + width / 2 - 5, y - 5);
                ctx2.lineTo(x + width / 2, y);
                ctx2.lineTo(x + width / 2 + 5, y - 5);
                ctx2.fill();
                ctx2.stroke();

            }
        }

        function romboCondición(x, y, width, height) {
            var ctx1 = cargactxCanvas('lienzo_diagramaC1');
            var ctx2 = cargactxCanvas('lienzo_diagramaC2');
            ctx1.fillStyle = 'rgb(122, 201, 241)';
            if (ctx1) {
                tipo = 3;
                ctx1.beginPath();


                ctx1.moveTo(x + width / 2, y); //inicio de rombo
                ctx1.lineTo(x + width, y + height / 2);
                ctx1.lineTo(x + width / 2, y + height);
                ctx1.lineTo(x, y + height / 2);
                ctx1.lineTo(x + width / 2, y); //fin de rombo
                ctx1.closePath();
                ctx1.fill();
                ctx1.stroke();

                //ctx2.fillStyle = 'black';
                ctx2.font = "bold 15px sans-serif";
                ctx2.fillText(texto, x + width / 3.2, y + height / 1.5);
                //ctx2.strokeText("INICIO", x + width / 3.2, y + height / 1.5);
            }
        }

        function dibujarOpciones(x, y, width, height) {
            var ctx2 = cargactxCanvas('lienzo_diagramaC2');
            ctx2.beginPath();
            ctx2.moveTo(x + width / 2, y + height);
            ctx2.lineTo(x + width / 2, y + height + 20);
            ctx2.closePath();

            ctx2.moveTo(x + width, y + height / 2);
            ctx2.lineTo(x + width + espacio + width / 2, y + height / 2);
            ctx2.lineTo(x + width + espacio + width / 2, y + height + 20);

            ctx2.stroke();
            //ctx2.fillStyle = 'black';
            ctx2.font = "bold 15px sans-serif";
            ctx2.fillText("Si", x + (width / 2) - 20, y + height + 15);
            ctx2.fillText("No", x + width + espacio + (width / 2) - 25, y + height + 15);

        }

        function cambiarFondo() {

            var ctx = cargactxCanvas('lienzo_diagramaC1');

            if (color == 0) {

                ctx.fillStyle = 'yellow';
                //ctx.stroke();
                ctx.fill();
            }
            if (color == 1) {

                ctx.fillStyle = 'green';
                ctx.fill();

            }
            if (color == 2) {

                ctx.fillStyle = 'rgb(221, 79, 79)';
                ctx.fill();

            }
            if (color == 3) {

                ctx.fillStyle = 'rgb(69, 114, 230)';
                ctx.fill();

            }
            if (color == 4) {

                ctx.fillStyle = 'rgb(242, 197, 124)';
                ctx.fill();

            }
            if (color == 5) {

                ctx.fillStyle = 'rgb(189, 242, 124)';
                ctx.fill();


            }
            if (color == 6) {

                ctx.fillStyle = 'rgb(177, 145, 236)';
                ctx.fill();


            }
            if (color == 7) {

                ctx.fillStyle = 'rgb(122, 201, 241)';
                ctx.fill();
                color = -1;

            }
            color++;
        }

        function cambiarBorde() {
            var ctx = cargactxCanvas('lienzo_diagramaC1');
            if (colorBorde == 0) {
                ctx.lineWidth = 5;
                ctx.strokeStyle = 'red';
                ctx.stroke();
                //ctx.fill();
            }
            if (colorBorde == 1) {
                ctx.lineWidth = 5;
                ctx.strokeStyle = 'green';
                ctx.stroke();
                //ctx.fill();
            }
            if (colorBorde == 2) {
                ctx.lineWidth = 5;
                ctx.strokeStyle = 'blue';
                ctx.stroke();
                //ctx.fill();
            }
            if (colorBorde == 3) {
                ctx.lineWidth = 5;
                ctx.strokeStyle = 'violet';
                ctx.stroke();
                //ctx.fill();
            }
            if (colorBorde == 4) {
                ctx.lineWidth = 5;
                ctx.strokeStyle = 'pink';
                ctx.stroke();
                //ctx.fill();
            }
            if (colorBorde == 5) {
                ctx.lineWidth = 5;
                ctx.strokeStyle = 'black';
                ctx.stroke();
                //ctx.fill();
                colorBorde = -1;
            }
            colorBorde++;
        }

        function rectangulo(x, y, width, height, texto) {
            var ctx1 = cargactxCanvas('lienzo_diagramaC1');
            var ctx2 = cargactxCanvas('lienzo_diagramaC2');
            ctx1.fillStyle = 'rgb(122, 201, 241)';
            if (ctx1) {
                //rectangulo
                ctx1.beginPath();
                ctx1.moveTo(x, y);
                ctx1.lineTo(x + width, y);
                ctx1.lineTo(x + width, y + height);
                ctx1.lineTo(x, y + height);
                ctx1.lineTo(x, y);
                ctx1.closePath();
                ctx1.fill();
                ctx1.stroke();

                //texto
                //ctx2.fillStyle = 'black';
                ctx2.font = "bold 15px sans-serif";
                ctx2.fillText(texto, x + 10, y + height / 3);
            }
        }

        function cuadroEntrada(x, y, width, height, entrada) {
            var ctx1 = cargactxCanvas('lienzo_diagramaC1');
            var ctx2 = cargactxCanvas('lienzo_diagramaC2');
            ctx1.fillStyle = 'rgb(122, 201, 241)';
            if (ctx1) {
                tipo = 1;
                ctx1.beginPath();
                ctx1.moveTo(x, y);
                ctx1.lineTo(x, y + height);

                ctx1.quadraticCurveTo(x, y + 1.2 * height, x + width / 2, y + height - 5);
                ctx1.moveTo(x + width / 2, y + height - 5);
                ctx1.quadraticCurveTo(x + (3 * width / 4), y + (height / 2) + 15, x + width, y + height - 10);
                
                ctx1.lineTo(x + width, y);
                ctx1.lineTo(x, y)
                ctx1.fill();
                ctx1.stroke();
                //ctx2.fillStyle = 'black';
                ctx2.font = "bold 15px sans-serif";
                ctx2.fillText(entrada, x + 3.2, y + height / 3);
            }
        }

        function cuadroSalida(x, y, width, height, salida) {
            var ctx1 = cargactxCanvas('lienzo_diagramaC1');
            var ctx2 = cargactxCanvas('lienzo_diagramaC2');
            ctx1.fillStyle = 'rgb(122, 201, 241)';
            if (ctx1) {
                //trapezoide
                ctx1.beginPath();
                ctx1.moveTo(x, y + 15);
                ctx1.lineTo(x + 15, y);
                ctx1.lineTo(x + width, y);
                ctx1.lineTo(x + width, y + height);
                ctx1.lineTo(x, y + height);

                
                ctx1.closePath();
                ctx1.fill();
                ctx1.stroke();

                //texto
                //ctx2.fillStyle = 'black';
                ctx2.font = "bold 15px sans-serif";
                ctx2.fillText(texto, x + 10, y + height / 3);

            }
        }
 