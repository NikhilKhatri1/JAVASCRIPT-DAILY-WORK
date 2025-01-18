// start from initial to final
gsap.to(".box1",{
        x:1000,
        duration:2,
        delay:1,
        backgroundColor:"blue",
        borderRadius:"200px"
})
// start from final to initial
gsap.from(".box2",{
        x:500,
        y:100,
        duration:2,
        delay:1,
        backgroundColor:"palevioletred",
        borderRadius:"200px"
})