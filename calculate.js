    /*  ----------------------------------------------------------------------------------
        calculateEvaluate
        ---------------------------------------------------------------------------------- */

        function calculateEvaluate(str)
        {
            // evaluate expression

            // str | string | calculator display

            var ret = str.replace(/^\s+/, "").replace(/\s+$/, ""); // strip spaces

            if (ret === "") { return ret; }

            try
            {
                ret = "" + eval(str); // preferrably eval is not used, use e.g. shunting yard algorithm instead
            }
            catch (err)
            {
                ret = "syntax error";

                console.log(err);
            }

            return ret;
        }








