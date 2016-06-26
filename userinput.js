    /*  ----------------------------------------------------------------------------------
        userInputKeyBoard
        ---------------------------------------------------------------------------------- */

        function userInputKeyBoard(evt)
        {
            // user input keyboard

            // evt | object | event

        //  console.log(evt); // uncomment this line and press F12 in Chrome or IE to see dump, click triangle to expand

            if (evt.target.nodeName.toLowerCase() === "input") // always use three equal signs
            {
                var typ = evt.type;  // "keydown", "keypress", "input", "keyup"
                var whi = evt.which; //

                switch (evt.target.type.toLowerCase())
                {
                    case "text":
                    {
                    //  console.log("evtKeyBoard text", typ, whi);
                        break; // always use break
                    }

                    case "button":
                    {
                    //  console.log("evtKeyBoard button", typ, whi);
                        break; // always use break
                    }
                }
            }
        }

    /*  ----------------------------------------------------------------------------------
        userInputMouse
        ---------------------------------------------------------------------------------- */

        function userInputMouse(evt)
        {
            // user input mouse

            // evt | object | event

        //  console.log(evt); // uncomment this line and press F12 in Chrome or IE to see dump, click triangle to expand

            if (evt.target.nodeName.toLowerCase() === "input") // always use three equal signs
            {
                var but = "";       // "left", "middle", "right"
                var typ = evt.type; // "mousedown", "mousemove", "mouseup"

                switch (evt.button)
                {
                    case 0: { but = "left"  ; break; } // always use break
                    case 1: { but = "middle"; break; } // always use break
                    case 2: { but = "right" ; break; } // always use break
                }

                switch (evt.target.type.toLowerCase())
                {
                    case "text":
                    {
                    //  console.log("evtMouse text", but, typ);
                        break; // always use break
                    }

                    case "button":
                    {
                        if ((typ === "mouseup") && (but === "left"))
                        {
                            var dis = document.getElementById("calculator display");            // HTML element | calculator display
                            var key = evt.target.value.replace(/^\s+/, "").replace(/\s+$/, ""); // string       | calculator key (spaces stripped)

                            switch (key)
                            {
                                case "x": { dis.value = dis.value + "*";              break; } // always use break
                                case "=": { dis.value = calculateEvaluate(dis.value); break; } // always use break
                                case "C": { dis.value = "";                           break; } // always use break
                                default : { dis.value = dis.value + key;              break; } // always use break (superfluous in this case, but we still use it)
                            }
                        }

                    //  console.log("evtMouse button", but, typ);
                        break; // always use break
                    }
                }
            }
        }





