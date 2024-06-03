circle({
    targets: ".circle",
    translateX: 250,
    delay: circle.stagger(200, { start: 1000 })
    background: "#0000FF",
    direction: "reverse"
})

let animation = anime({
    targets: ".box",
    translateX: 150,
    height: "80px",
    width: "80px",
    duration: 2000,
    easing: "linear",
    direction: "alternate",
    loop: true,
});

triangle({
    
})