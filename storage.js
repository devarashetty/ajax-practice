/**
 * Created by Sai on 9/5/2015.
 */

$(document).ready(function(){
    $("#search").click(function(){
        event.preventDefault();
        var director=document.getElementById("director").value;
        console.log(director);

        $.ajax({
            url:"http://netflixroulette.net/api/api.php?director=Quentin",

            error:function(){
                $("#error").text("please check the link")
            },

            success:function(data){
                console.log(data);
                for(var i=0;i<data.length;i++){

                    if(data[i].director==director)
                    {
                        var title=document.createTextNode(data[i].show_title);
                        var year=document.createTextNode("("+data[i].release_year+")");
                        var summarymovie=document.createTextNode(data[i].summary);
                        var rating=document.createTextNode(data[i].rating);
                        var directorofmovie=document.createTextNode(data[i].director);

                        var nodefortitle=document.createElement("div");
                        nodefortitle.setAttribute("id","title");
                        nodefortitle.appendChild(title);

                        var nodeforyear=document.createElement("div");
                        nodeforyear.setAttribute("id","year");
                        nodeforyear.appendChild(year);

                        var nodeforsummary=document.createElement("div");
                        nodeforsummary.setAttribute("id","summary");
                        nodeforsummary.appendChild(summarymovie);

                        var nodeforrating=document.createElement("div");
                        nodeforrating.setAttribute("id","rating");
                        nodeforrating.appendChild(rating);

                        var nodefordirector=document.createElement("div");
                        nodefordirector.setAttribute("id","director1");
                        nodefordirector.appendChild(directorofmovie);

                        var nodeforimage=document.createElement("img");
                        nodeforimage.setAttribute("id","poster");
                        nodeforimage.setAttribute("src",data[i].poster);

                        var parentnode=document.createElement("div");
                        parentnode.setAttribute("id","content");
                        parentnode.appendChild(nodefortitle);
                        parentnode.appendChild(nodeforyear);
                        parentnode.appendChild(nodeforsummary);
                        parentnode.appendChild(nodeforrating);
                        parentnode.appendChild(nodefordirector);
                        parentnode.appendChild(nodeforimage);

                        document.getElementById("error").appendChild(parentnode);

                    }

                }
            },
            type:"GET"
        })

    })
})

