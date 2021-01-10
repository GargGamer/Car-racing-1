class Form{
    constructor(){}
    
    display(){
        var title = createElement('h2');
        title.html("4p Car Racing")
        title.position(250,250);

        var input = createInput("name")
        var button = createButton("play")
        var greeting = createElement("h4")

        input.position(250,340);
        button.position(250,400);

        button.mousePressed(function(){
            input.hide();
            button.hide()
            var name = input.value();
            playerCount = playerCount + 1
            player.update(name)
            player.updateCount(playerCount);
            
            greeting.html("hello "+ name );
            greeting.position(250,350)
         });
    }

}