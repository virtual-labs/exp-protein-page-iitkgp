document.addEventListener("DOMContentLoaded", function () {

    jsPlumb.ready(function () {

        var instance,
            discs = [],

            addDisc = function (evt) {
                var info = createDisc();
                var e = prepare(info.id);
                instance.draggable(info.id);
                discs.push(info.id);
                evt.stopPropagation();
                evt.preventDefault();
            },

            reset = function (e) {
                for (var i = 0; i < discs.length; i++) {
                    var d = document.getElementById(discs[i]);
                    if (d) d.parentNode.removeChild(d);
                }
                discs = [];
                e.stopPropagation();
                e.preventDefault();
            },

            initAnimation = function (elId) {
                var el = document.getElementById(elId);

                instance.on(el, 'click', function (e, ui) {
                    if (el.className.indexOf("jsPlumb_dragged") > -1) {
                        jsPlumb.removeClass(elId, "jsPlumb_dragged");
                        return;
                    }

                    var o = instance.getOffset(el, true),
                        o2 = instance.getOffset(el),
                        s = jsPlumb.getSize(el),
                        pxy = [e.pageX || e.clientX, e.pageY || e.clientY],
                        c = [pxy[0] - (o.left + (s[0] / 2)), pxy[1] - (o.top + (s[1] / 2))],
                        oo = [c[0] / s[0], c[1] / s[1]],
                        DIST = 350,
                        l = o2.left + (oo[0] * DIST),
                        t = o2.top + (oo[1] * DIST);

                    var id = el.getAttribute("id");
                    instance.animate(el, { left: l, top: t }, { duration: 350, easing: 'easeOutBack' });
                });
            },

            // notice there are no dragOptions specified here, which is different from the
            // draggableConnectors2 demo.  all connections on this page are therefore
            // implicitly in the default scope.
            //--------for positive voltage connections--------//
            /*  endpoint = {
                anchor: [0.5, 0.5, 0, -1],
                connectorStyle: { strokeWidth: 5, stroke: "red" },
                endpointsOnTop: true,
                isSource: true,
                maxConnections: 10,
                isTarget: true,
                dropOptions: { tolerance: "touch", hoverClass: "dropHover" }
            },
    
            prepare = function (elId) {
                initAnimation(elId);
    
                return instance.addEndpoint(elId, endpoint);
            },
     */

            //--------for negative voltage connections--------//
            endpointblack = {
                anchor: [0.5, 0.5, 0, -1],
                connectorStyle: { strokeWidth: 4, stroke: "black" },
                endpointsOnTop: true,
                isSource: true,
                maxConnections: 10,
                isTarget: true,
                dropOptions: { tolerance: "touch", hoverClass: "dropHover" }
            },
            prepare_negv = function (elId) {
                initAnimation(elId);

                return instance.addEndpoint(elId, endpointblack);
            },

            endpointred = {
                anchor: [0.5, 0.5, 0, -1],
                connectorStyle: { strokeWidth: 4, stroke: "red" },
                endpointsOnTop: true,
                isSource: true,
                maxConnections: 10,
                isTarget: true,
                dropOptions: { tolerance: "touch", hoverClass: "dropHover" }
            },
            prepare_posv = function (elId) {
                initAnimation(elId);

                return instance.addEndpoint(elId, endpointred);
            },


            // this is overridden by the YUI demo.
            createDisc = function () {
                var d = document.createElement("div");
                d.className = "bigdot";
                document.getElementById("animation-demo").appendChild(d);
                var id = '' + ((new Date().getTime()));
                d.setAttribute("id", id);
                var w = screen.width - 162, h = screen.height - 162;
                var x = (5 * w) + Math.floor(Math.random() * (10 * w));
                var y = (5 * h) + Math.floor(Math.random() * (10 * h));
                d.style.top = y + 'px';
                d.style.left = x + 'px';
                return { d: d, id: id };
            };

        // get a jsPlumb instance, setting some appropriate defaults and a Container.
        instance = jsPlumb.getInstance({
            DragOptions: { cursor: 'wait', zIndex: 20 },
            Endpoint: ["Image", { url: "./images/connectdot.png" }],
            Connector: ["Bezier", { curviness: -40 }],
            Container: "canvas"
        });


        /*  instance1 = jsPlumb.getInstance({
             DragOptions: { cursor: 'wait', zIndex: 20 },
             Endpoint: [ "Image", { url: "./images/posedot.png" } ],
             Connector: [ "Bezier", { curviness: -40 } ],
             Container: "canvas"
         });  */


        // suspend drawing and initialise.
        instance.batch(function () {
            var e1 = prepare_posv("cd1"), // negative in case

                e2 = prepare_negv("cd2"), // positive in case
                e3 = prepare_negv("cd3"), // negative in voltage meter
                e4 = prepare_posv("cd4"); // positive in case
            e5 = prepare_negv("cd5"), // negative in voltage meter
                e6 = prepare_posv("cd6"); // positive in voltmeter

            e7 = prepare_negv("cd7"), // negative in voltage meter
                e8 = prepare_posv("cd8"); // positive in voltmeter

            e9 = prepare_negv("cd9"), // negative in voltage meter
                e10 = prepare_posv("cd10"); // positive in voltmeter


            // instance.connect({ source: e1, target: e3 });
            // instance.connect({ source: e2, target: e4 });


            //delete clicked connection
            instance.bind("click", function (connection, originalEvent) {

                if ((((connection.sourceId == 'cd1' && (connection.targetId == 'cd4') || connection.targetId == 'cd6' || connection.targetId == 'cd8' || connection.targetId == 'cd10') || (connection.sourceId == 'cd4' && connection.targetId == 'cd1')))) {
                    instance.deleteConnection(connection);

                }
                else if ((((connection.sourceId == 'cd2' && (connection.targetId == 'cd3' || connection.targetId == 'cd5' || connection.targetId == 'cd7' || connection.targetId == 'cd9')) || (connection.sourceId == 'cd3' && connection.targetId == 'cd2')))) {
                    instance.deleteConnection(connection);

                }



                else {
                    instance.deleteConnection(connection);
                }


            });
        });




        jsPlumb.fire("jsPlumbDemoLoaded", instance);
        //jsPlumb.fire("jsPlumbDemoLoaded", instance1);

        var is_connected_1_4 = false;
        var is_connected_1_6 = false;
        var is_connected_1_8 = false;
        var is_connected_1_10 = false;
        var is_connected_2_3 = false;
        var is_connected_2_5 = false;
        var is_connected_2_7 = false;
        var is_connected_2_9 = false;

        document.getElementById("cvt").addEventListener("click", function () {
            //var d = instance.exportData();
            //console.log(instance.getAllConnections());


            var correct_connections_1_4 = [
                {
                    "source": "cd1",
                    "target": "cd4"
                },

                {
                    "source": "cd4",
                    "target": "cd1"
                }
            ];

            var correct_connections_1_6 = [
                {
                    "source": "cd1",
                    "target": "cd6"
                },

                {
                    "source": "cd6",
                    "target": "cd1"
                }
            ];
            var correct_connections_1_8 = [
                {
                    "source": "cd1",
                    "target": "cd8"
                },

                {
                    "source": "cd8",
                    "target": "cd1"
                }
            ];

            var correct_connections_1_10 = [
                {
                    "source": "cd1",
                    "target": "cd10"
                },

                {
                    "source": "cd10",
                    "target": "cd1"
                }
            ];

            var correct_connections_2_3 = [
                {
                    "source": "cd2",
                    "target": "cd3"
                },

                {
                    "source": "cd3",
                    "target": "cd2"
                }
            ];

            var correct_connections_2_5 = [
                {
                    "source": "cd2",
                    "target": "cd5"
                },

                {
                    "source": "cd5",
                    "target": "cd2"
                }
            ];

            var correct_connections_2_7 = [
                {
                    "source": "cd2",
                    "target": "cd7"
                },

                {
                    "source": "cd7",
                    "target": "cd2"
                }
            ];
            var correct_connections_2_9 = [
                {
                    "source": "cd2",
                    "target": "cd9"
                },

                {
                    "source": "cd9",
                    "target": "cd2"
                }
            ];











            //a connection outside this will invalidate the circuit
            var allowed_connections = [
                {
                    "source": "cd1",
                    "target": "cd4"
                },

                {
                    "source": "cd4",
                    "target": "cd1"
                },

                {
                    "source": "cd1",
                    "target": "cd6"
                },

                {
                    "source": "cd6",
                    "target": "cd1"
                },


                {
                    "source": "cd1",
                    "target": "cd8"
                },

                {
                    "source": "cd8",
                    "target": "cd1"
                },

                {
                    "source": "cd1",
                    "target": "cd10"
                },

                {
                    "source": "cd10",
                    "target": "cd1"
                },



                {
                    "source": "cd2",
                    "target": "cd3"
                },

                {
                    "source": "cd3",
                    "target": "cd2"
                },

                {
                    "source": "cd2",
                    "target": "cd5"
                },

                {
                    "source": "cd5",
                    "target": "cd2"
                },



                {
                    "source": "cd2",
                    "target": "cd7"
                },

                {
                    "source": "cd7",
                    "target": "cd2"
                },

                {
                    "source": "cd2",
                    "target": "cd9"
                },

                {
                    "source": "cd9",
                    "target": "cd2"
                },





            ];

            var actual_connections = instance.getAllConnections();

            //connection false statements

            var unallowed_connection_present = false;
            var count = 0; // counts number of connection

            //positive connections
            actual_connections.forEach(function (connection) {
                count++;
                var this_connection = {
                    "source": connection.sourceId,
                    "target": connection.targetId
                };

                if (!is_connected_1_4) {
                    is_connected_1_4 = correct_connections_1_4.find(function (connection) {
                        return connection.source === this_connection.source && connection.target === this_connection.target;
                    });
                }

                if (!unallowed_connection_present) {
                    unallowed_connection_present = !(allowed_connections.find(function (connection) {
                        return (connection.source === this_connection.source && connection.target === this_connection.target);
                    }));
                }
                // if this_connection exists in correct_connections
                // remove this connection from correct ones
                // continue
                // else
                // return false

            });

            actual_connections.forEach(function (connection) {
                count++;
                var this_connection = {
                    "source": connection.sourceId,
                    "target": connection.targetId
                };

                if (!is_connected_1_6) {
                    is_connected_1_6 = correct_connections_1_6.find(function (connection) {
                        return connection.source === this_connection.source && connection.target === this_connection.target;
                    });
                }

                if (!unallowed_connection_present) {
                    unallowed_connection_present = !(allowed_connections.find(function (connection) {
                        return (connection.source === this_connection.source && connection.target === this_connection.target);
                    }));
                }
                // if this_connection exists in correct_connections
                // remove this connection from correct ones
                // continue
                // else
                // return false

            });
            actual_connections.forEach(function (connection) {
                count++;
                var this_connection = {
                    "source": connection.sourceId,
                    "target": connection.targetId
                };

                if (!is_connected_1_8) {
                    is_connected_1_8 = correct_connections_1_8.find(function (connection) {
                        return connection.source === this_connection.source && connection.target === this_connection.target;
                    });
                }

                if (!unallowed_connection_present) {
                    unallowed_connection_present = !(allowed_connections.find(function (connection) {
                        return (connection.source === this_connection.source && connection.target === this_connection.target);
                    }));
                }
                // if this_connection exists in correct_connections
                // remove this connection from correct ones
                // continue
                // else
                // return false

            });

            actual_connections.forEach(function (connection) {
                count++;
                var this_connection = {
                    "source": connection.sourceId,
                    "target": connection.targetId
                };

                if (!is_connected_1_10) {
                    is_connected_1_10 = correct_connections_1_10.find(function (connection) {
                        return connection.source === this_connection.source && connection.target === this_connection.target;
                    });
                }

                if (!unallowed_connection_present) {
                    unallowed_connection_present = !(allowed_connections.find(function (connection) {
                        return (connection.source === this_connection.source && connection.target === this_connection.target);
                    }));
                }
                // if this_connection exists in correct_connections
                // remove this connection from correct ones
                // continue
                // else
                // return false

            });

            //checking for 2_3 connection
            actual_connections.forEach(function (connection) {
                var this_connection = {
                    "source": connection.sourceId,
                    "target": connection.targetId
                };

                if (!is_connected_2_3) {
                    is_connected_2_3 = correct_connections_2_3.find(function (connection) {
                        return connection.source === this_connection.source && connection.target === this_connection.target;
                    });
                }
                // if this_connection exists in correct_connections
                // remove this connection from correct ones
                // continue
                // else
                // return false
            });

            actual_connections.forEach(function (connection) {
                var this_connection = {
                    "source": connection.sourceId,
                    "target": connection.targetId
                };

                if (!is_connected_2_5) {
                    is_connected_2_5 = correct_connections_2_5.find(function (connection) {
                        return connection.source === this_connection.source && connection.target === this_connection.target;
                    });
                }
                // if this_connection exists in correct_connections
                // remove this connection from correct ones
                // continue
                // else
                // return false
            });

            actual_connections.forEach(function (connection) {
                var this_connection = {
                    "source": connection.sourceId,
                    "target": connection.targetId
                };

                if (!is_connected_2_7) {
                    is_connected_2_7 = correct_connections_2_7.find(function (connection) {
                        return connection.source === this_connection.source && connection.target === this_connection.target;
                    });
                }
                // if this_connection exists in correct_connections
                // remove this connection from correct ones
                // continue
                // else
                // return false
            });
            actual_connections.forEach(function (connection) {
                var this_connection = {
                    "source": connection.sourceId,
                    "target": connection.targetId
                };

                if (!is_connected_2_9) {
                    is_connected_2_9 = correct_connections_2_9.find(function (connection) {
                        return connection.source === this_connection.source && connection.target === this_connection.target;
                    });
                }
                // if this_connection exists in correct_connections
                // remove this connection from correct ones
                // continue
                // else
                // return false
            });





            if (((is_connected_1_4 && is_connected_2_3) || (is_connected_1_6 && is_connected_2_5) || (is_connected_1_8 && is_connected_2_7) || (is_connected_1_10 && is_connected_2_9)) && !unallowed_connection_present) {


                $('#alertModal').modal('show');
                $('.modal-body').html('Connection is correct. <br> Click on "V" button of the power supply to switch ON. And "+" sign button of the power supply to set the voltage bewteen 80 V and 100 V.');
                //document.getElementById("samplerun").disabled = true;
            } else {
                $('#alertModal').modal('show');
                $('.modal-body').text('Connection is wrong');
                const canvas = document.getElementById('textvoltimer');
                const ctx = canvas.getContext('2d');
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                // Set font properties
                ctx.font = 'bold 80px Arial'; // You can adjust the font weight, size and family

                // Set text properties
                ctx.fillStyle = 'black'; // Text color
                ctx.textAlign = 'center'; // Text alignment (centered horizontally)
                ctx.textBaseline = 'middle'; // Text baseline (centered vertically)

                // Define the text to be displayed
                const text = " ";

                // Get the position to place the text (in this case, centered on the canvas)
                const x = canvas.width / 2;
                const y = canvas.height / 2;

                // Draw the text on the canvas
                ctx.fillText(text, x, y);
                return;

                return;
            }



        });


        document.getElementById('cstop').addEventListener('click', function () {
            // Delete all connections
            //  instance.deleteEveryConnection();

            // document.getElementById("staingel").disabled=false;
            document.getElementById("gelrun").disabled = true;
            cancelAnimationFrame(cancelani1);
            cancelAnimationFrame(cancelani2);
            cancelAnimationFrame(cancelani3);
            cancelAnimationFrame(cancelani4);
            document.getElementById("topsetup").setAttribute("onclick", "puttopup()");
            const canvas = document.getElementById('textvoltimer');
            const ctx = canvas.getContext('2d');
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            // Set font properties
            ctx.font = 'bold 80px Arial'; // You can adjust the font weight, size and family

            // Set text properties
            ctx.fillStyle = 'black'; // Text color
            ctx.textAlign = 'center'; // Text alignment (centered horizontally)
            ctx.textBaseline = 'middle'; // Text baseline (centered vertically)

            // Define the text to be displayed
            const text = " ";

            // Get the position to place the text (in this case, centered on the canvas)
            const x = canvas.width / 2;
            const y = canvas.height / 2;

            // Draw the text on the canvas
            ctx.fillText(text, x, y);
            return;


        });




        document.getElementById('topsetup').addEventListener('click', function () {

            var cd1s = document.getElementById('cd1');
            var cd2s = document.getElementById("cd2");
            if ((is_connected_1_4) || (is_connected_1_6) || (is_connected_1_8) || (is_connected_1_10) && (is_connected_2_3) || (is_connected_2_5) || (is_connected_2_7) || (is_connected_2_9)
            ) {
                // Move the target element (and connected elements) upwards 

                var imgobjdivld1 = null;
                var imgobjdivld2 = null;
               
                var currentltopld1 = 151;
                var currentltopld2 = 151;
               
                clearInterval(imgobjdivld1);
             
                imgobjdivld1 = setInterval(frameld1, 15);
                imgobjdivld2 = setInterval(frameld2, 15);

                function frameld1() {
                    if (currentltopld1 == 130) {
                        clearInterval(imgobjdivld1);

                    }
                    else {
                        currentltopld1--;
                        cd1s.style.top = currentltopld1 + '%';
                       
                        instance.repaintEverything();

                    }
                }
                function frameld2() {
                    if (currentltopld2 == 130) {
                        clearInterval(imgobjdivld2);

                    }
                    else {
                        currentltopld2--;
                        cd2s.style.top = currentltopld2 + '%';
                       
                        instance.repaintEverything();

                    }
                }

                //  cd1s.style.top =  130 + '%';
                // cd2s.style.top =  130 + '%';

                // Repaint the connections
               // instance.repaintEverything();
            }
        });

    });


});
