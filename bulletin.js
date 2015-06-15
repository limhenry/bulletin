
        var i = 0;
        var getJSON = function(url) {
            return new Promise(function(resolve, reject) {
                var xhr = new XMLHttpRequest();
                xhr.open('get', url, true);
                xhr.responseType = 'json';
                xhr.onload = function() {
                    var status = xhr.status;
                    if (status == 200) {
                        resolve(xhr.response);
                    } else {
                        reject(status);
                    }
                };
                xhr.send();
            });
        };

        getJSON('//mmu-api.appspot.com/response').then(function(data) {

                while (i < data.length) {
                    var div = document.createElement("div");
                    var div2 = document.createElement("div");
                    var li = document.createElement("li");
                    var p = document.createElement("p");
                    var p2 = document.createElement("p");
                    var icon = document.createElement("i");
                    icon.setAttribute("class", "mdi-editor-attach-file tooltipped");
                    icon.setAttribute("data-position", "left");
                    icon.setAttribute("data-delay", "50");
                    icon.setAttribute("data-tooltip", "Attachment available");
                    li.setAttribute("id", i);
                    var title = document.createTextNode(data[i].title.toUpperCase() + " - " + data[i].posted_date);

                    if (data[i].content.length > 0) {
                        var contents = document.createTextNode(data[i].content);
                        div2.appendChild(p);
                        var s = data[i].images;
                        s = s.replace("bulletinfile", "https://online.mmu.edu.my/bulletinfile");
                        p.innerHTML = s;
                        if (data[i].attachment !== "") {
                            var s2 = "Attachment: <br>" + data[i].attachment + "<br>";
                            p2.innerHTML = s2;
                            div2.appendChild(p2);
                            div.appendChild(icon);
                        }
                    } else {
                        var contents = document.createTextNode("Move along, nothing to see here");
                    }

                    div.appendChild(title);
                    p.appendChild(contents);

                    div.setAttribute("class", "collapsible-header");
                    div.setAttribute("id", data[i].posted_ID);
                    div2.setAttribute("class", "collapsible-body");
                    document.getElementById("links").appendChild(li);
                    document.getElementById(i).appendChild(div);
                    document.getElementById(i).appendChild(div2);
                    p = document.getElementById(i).children[1].children[0]
                    p.innerHTML = p.innerHTML.replace(/\n\n/g, "<br>")
                        /**console.log("done")**/
                    i++;
                }
                hash();
                document.getElementById('preloader').style.display = 'none';
                run();

            }

        );

        function run() {
            $('.tooltipped').tooltip({delay: 50});
            function GetCookie(name) {
                var arg = name + "=";
                var alen = arg.length;
                var clen = document.cookie.length;
                var i = 0;
                while (i < clen) {
                    var j = i + alen;
                    if (document.cookie.substring(i, j) == arg)
                        return "here";
                    i = document.cookie.indexOf(" ", i) + 1;
                    if (i == 0) break;
                }
                return null;
            }
            var visit = GetCookie("COOKIE1");
            if (visit == null) {
                var expire = new Date();
                window.name = "thiswin";
                Materialize.toast('WARNING: This is an experimental build.', 5000); //
                Materialize.toast('By browsing our site you agree to our use of cookies.', 10000); //
                expire = new Date(expire.getTime() + 7776000000);
                document.cookie = "COOKIE1=here; expires=" + expire;
            }
            else{
                Materialize.toast('Yeah! Welcome back :)', 5000); //
            }
             
            $('.collapsible').collapsible({
                accordion: false // A setting that changes the collapsible behavior to expandable instead of the default accordion style
            });


        }
        $(".button-collapse").sideNav();
        function hash() {
            hash = location.hash;
            try {
                hash = hash.replace("#", "");
                apple = document.getElementById(hash);
                apple.setAttribute("class", "collapsible-header active");
                apple.scrollIntoView({
                    block: "start",
                    behavior: "smooth"
                });
            } catch (e) {
                /**console.log("why u jiang bad de")**/
            }

        }
        (function(i, s, o, g, r, a, m) {
            i['GoogleAnalyticsObject'] = r;
            i[r] = i[r] || function() {
                (i[r].q = i[r].q || []).push(arguments)
            }, i[r].l = 1 * new Date();
            a = s.createElement(o),
                m = s.getElementsByTagName(o)[0];
            a.async = 1;
            a.src = g;
            m.parentNode.insertBefore(a, m)
        })(window, document, 'script', '//www.google-analytics.com/analytics.js', 'ga');

        ga('create', 'UA-57741199-1', 'auto');
        ga('send', 'pageview');
    
