let products = [
    {
        name: "MiniFRC Kit of Parts",
        link: "minifrc-kit-of-parts",
        image: "nou2-minifrc-kit-of-parts-1.png",
        price: "$20.00 - $25.00",
        buy: `<form target="paypal" action="https://www.paypal.com/cgi-bin/webscr" method="post">
            <input type="hidden" name="cmd" value="_s-xclick">
            <input type="hidden" name="hosted_button_id" value="MKYV4CPE43URU">
            <input type="hidden" name="on0" value="Kit Variations">Kit Variations
            <select class="browser-default" name="os0" style="width: 200px">
                <option value="NoU Kit">NoU Kit $25.00 USD</option>
                <option value="Uno Kit">Uno Kit $20.00 USD</option>
            </select>
            <div style="height: 10px"/>
            <input type="hidden" name="currency_code" value="USD">
            <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_cart_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!">
            <img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1">
            </form>`,
        blurb: `This kit includes all of the fundamentals a robot needs to compete in MiniFRC. Comes with either a ESP32 and NoU2 (pictured) or an Uno and Adafruit motor shield.`,
        description: `With two bundle options, this kit will give you and your team the basics to get yourself on the field. Buyers get the choice of either an <a href="/products/uno/">Uno</a> with the <a href="/products/adafruit-motor-shield-v1">Adafruit motor shield v1</a> or the <a href="/products/esp32/">ESP32</a> with the Alfredo-custom <a href="/products/alfredo-nou2/">NoU2</a> as their desired controller. Learn more about the difference between the two kits <a href="/news/minifrc-control-system-guide/">in this news post</a>.
        <br/><br/>
        <strong>This bundle contains:</strong>
        <div style="margin-left:10px">
            <ul class="browser-default">
            <li>4 <a href="/products/tt-motor">TT motors and wheels</a></li>
            <li>1 <a href="/products/9v-li-ion-battery">rechargeable 9V Li-ion battery</a></li>
            <li>1 <a href="/products/9v-barrel-jack">9V barrel jack cable</a></li>
            <li>1 <a href="/products/power-cell">power cell</a></li>
            <li>For the Uno kit ($20.00):</li>
            <ul class="browser-default">
                <li>1 <a href="/products/uno/">Uno microcontroller</a> with USB-B upload cable</li>
                <li>1 <a href="/products/adafruit-motor-shield-v1">Adafruit motor shield v1</a> with female headers</li>
                <li>1 <a href="/products/bt06">BT06 Bluetooth module</a></li>
                <li>1 <a href="/products/chip0">Chip0</a></li>
            </ul>
            </li>
            <li>For the NoU kit ($25.00):</li>
            <ul class="browser-default">
                <li>1 <a href="/products/esp32">ESP32 microcontroller</a></li>
                <li>1 <a href="/products/alfredo-nou2">Alfredo NoU2 motor shield</a></li>
            </ul>
        </div>`
    },
    {
        name: "9V Rechargable Li-ion Battery",
        link: "9v-li-ion-battery",
        image: "9v-li-ion-battery-1.png",
        price: "$5.00",
        blurb: `More powerful than ones you’ll find on store shelves, these Li-ion 9V batteries are perfect for powering small projects that require more current than conventional AAs and 9Vs. Comes complete with a built-in micro USB port for recharging.`,
        buy: `<form target="paypal" action="https://www.paypal.com/cgi-bin/webscr" method="post">
        <input type="hidden" name="cmd" value="_s-xclick">
        <input type="hidden" name="hosted_button_id" value="PDUSJPSBXURBG">
        <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_cart_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!">
        <img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1">
        </form>`,
        description: `These Lithium-ion (Li-ion) batteries come with short, overcharge, and over-discharge protection, making them a great choice for projects where extra care is a necessity. Compared to the typical alkaline AA and 9V batteries, they can deliver significantly more current in a tiny package, making them perfect for smaller robotics applications.  Thanks to a micro USB port for recharging, you will save money in the long run by not having to constantly replace your batteries.<br/>
        Check out our <a href="/news/fun-facts-about-batteries/">news post about these batteries</a> that breaks down what to expect from these and other Li-ion batteries.
        <br\><br\>
        Resources:
        <ul class="browser-default">
            <li><a href="/downloads/9V Battery (ACP).SLDPRT" download>CAD (.SLDPRT)</a></li>
        </ul>`
    },
    {
        name: "NoU2",
        link: "alfredo-nou2",
        image: "nou2-1.png",
        price: "$9.00",
        buy: `<form target="paypal" action="https://www.paypal.com/cgi-bin/webscr" method="post">
            <input type="hidden" name="cmd" value="_s-xclick">
            <input type="hidden" name="hosted_button_id" value="7CB7HWP37ALSE">
            <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_cart_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!">
            <img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1">
            </form>`,
        blurb: `Give power to your projects with this Alfredo-original <object><a href="/products/esp32">ESP32</a></object> shield. Built with six DC motor ports, support for four servos, a custom and intuitive library, and a sleek, compact design, the NoU2 is perfect for virtually any small robotics project.`,
        description: `Simply plug a <object><a href="/products/9v-li-ion-battery">9V power source</a></object> into the <object><a href="/products/9v-barrel-jack">barrel jack</a></object> and the NoU2 is ready to drive your latest robotics project. The NoU2 marks the next advancement in Alfredo’s multipurpose small robotics technology. This shield improves on the features pioneered by the original NoU, including:
        <ul class="browser-default">
            <li>6 DC motor ports, two more than the original NoU</li>
            <li>3.3V and 5V switch mode regulators reduce the risk of brownouts</li>
            <li>Better power management using bulk and distributive capacitors</li>
            <li>A power in barrel jack, lowering the chance of shorting your board</li>
            <li>Library support for motors and servos</li>
            <li>Improved GPIO pin layout</li>
        </ul>
        <br\><br\>
        Resources:
        <ul class="browser-default">
            <li><a href="/downloads/Alfredo NoU2 (ACP).SLDPRT" download>CAD (.SLDPRT)</a></li>
            <li><a href="https://github.com/AlfredoElectronics/Alfredo-NoU2" download>Software library on GitHub</a></li>
        </ul>`
    },
    {
        name: "ESP32",
        link: "esp32",
        image: "esp32-1.png",
        price: "$6.00",
        buy: `<form target="paypal" action="https://www.paypal.com/cgi-bin/webscr" method="post">
        <input type="hidden" name="cmd" value="_s-xclick">
        <input type="hidden" name="hosted_button_id" value="QGQ9J4N7552BL">
        <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_cart_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!">
        <img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1">
        </form>`,
        blurb: `The ESP32 is a high-performance microcontroller perfect for projects ranging from small robots to large-scale IoT implementations. The ESP32 comes with built-in Wi-Fi and Bluetooth capability, making it an outstanding choice to wrap logic, wireless communication, and input/output into an elegant, tiny package.`,
        description: `The ESP32 can be programmed with the <object><a href="https://www.arduino.cc/reference/en">Arduino language</a></object>, <object><a href="https://micropython.org/">MicroPython</a></object>, <object><a href="https://docs.espressif.com/projects/esp-idf/en/latest/esp32/">ESP-IDF</a></object>, and many more. Because of its integrated Bluetooth Low Energy chip, the ESP32 is ideal for hobby robotics applications.`
    },
    {
        name: "TT Motor",
        link: "tt-motor",
        image: "tt-motor-1.png",
        price: "$2.00",
        buy: `<form target="paypal" action="https://www.paypal.com/cgi-bin/webscr" method="post">
        <input type="hidden" name="cmd" value="_s-xclick">
        <input type="hidden" name="hosted_button_id" value="5H5AX8XYDEUWE">
        <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_cart_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!">
        <img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1">
        </form>`,
        blurb: `Often used in small robot drivetrains and winches, this motor comes equipped with a gearbox for added torque, as well as a removable plastic wheel.`,
        description: `An inexpensive and reliable package with a motor, gearbox, and wheel that’ll keep your robot moving forward. There are two terminals on the back of the motor for attaching wires. Simply reverse the polarity on these wires to change direction. Operating at 9 volts, these motors are a great choice to run off of either an <object><a href="adafruit-motor-shield-v1">Adafruit Motor Shield v1</a></object> or an <object><a href="alfredo-nou2">Alfredo NoU2</a></object>.
        <br/><br/>
        <strong>Specifications</strong>
        <div style="margin-left: 10px">
            <li>Motor speed (9V): 320 RPM</li>
            <li>No load current: 112 mA</li>
            <li>Stall current: 0.98 A</li>
            <li>Maximum voltage: 9V</li>
            <li>Motor mass: 25g</li>
            <li>Wheel diameter: 67 mm</li>
            <li>Wheel mass: 29g</li>
        </div>
        <br\><br\>
        Resources:
        <ul class="browser-default">
            <li><a href="/downloads/TT Motor (ACP).SLDPRT" download>Motor CAD (.SLDPRT)</a></li>
            <li><a href="/downloads/TT Wheel (ACP).SLDPRT" download>Wheel CAD (.SLDPRT)</a></li>
        </ul>`
    },
    {
        name: "N20 Motor",
        link: "n20-motor",
        image: "n20-motor-1.png",
        price: "$4.00",
        buy: `<form target="paypal" action="https://www.paypal.com/cgi-bin/webscr" method="post">
        <input type="hidden" name="cmd" value="_s-xclick">
        <input type="hidden" name="hosted_button_id" value="CX5VJLUR6A9U8">
        <input type="hidden" name="on0" value="RPM Selection">RPM Selection
        <select class="browser-default" name="os0" style="width: 200px">
            <option value="290 RPM">290 RPM </option>
            <option value="650 RPM">650 RPM </option>
            <option value="1350 RPM">1350 RPM </option>
        </select>
        <div style="height: 10px"/>
        <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_cart_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!">
        <img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1">
        </form>`,
        blurb: `N20 motors are compact and versatile gearbox/motor combo nearly as powerful as <object><a href="/products/tt-motor">TT motors</a></object> at one-third the weight. These brushed DC motors are perfect for manipulator and intake mechanisms in your next robotics project.`,
        description: `These tiny brushed DC gearmotors come in three ratios and can be supplied up to 9V.
        </br></br>
        <table class="striped" style="width: auto">
            <thead><tr><th align="center">N20 Motor Specifications</th></tr></thead>
            <tr><th>RPM at 9V</th><th>Stall torque</th><th>Stall current</th><th>No load current</th></tr>
            <tr><th>290 RPM</th>  <td>1.55 kg-cm</td>  <td>0.88 A</td>       <td>45 mA</td>          <tr>
            <tr><th>650 RPM</th>  <td>0.75 kg-cm</td>  <td>0.61 A</td>       <td>41 mA</td>          <tr>
            <tr><th>1350 RPM</th> <td>0.25 kg-cm</td>  <td>0.30 A</td>       <td>30 mA</td>          <tr>
        </table><br/>
        <br\><br\>
        Resources:
        <ul class="browser-default">
            <li><a href="/downloads/N20 Motor (ACP).SLDPRT" download>CAD (.SLDPRT)</a></li>
        </ul>`
    },
    {
        name: "Power Cell",
        link: "power-cell",
        image: "power-cell-1.png",
        price: "$1.00",
        buy: `<form target="paypal" action="https://www.paypal.com/cgi-bin/webscr" method="post">
        <input type="hidden" name="cmd" value="_s-xclick">
        <input type="hidden" name="hosted_button_id" value="7NEMB2BWQ4ZPG">
        <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_cart_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!">
        <img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1">
        </form>`,
        blurb: "Tiny foam power cell for MiniFRC.",
        description: `
        <ul class="browser-default">
            <li>Nominal diameter: 1.5 in</li>
            <li>Material: foam</li>
            <li>Expression: &nbsp; ：）</li>
        <ul/>`
    },
    {
        name: "Arduino Uno Clone",
        link: "uno",
        image: "arduino-uno-1.png",
        price: "$4.00",
        buy: `<form target="paypal" action="https://www.paypal.com/cgi-bin/webscr" method="post">
        <input type="hidden" name="cmd" value="_s-xclick">
        <input type="hidden" name="hosted_button_id" value="FTG4WJRY2AYAY">
        <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_cart_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!">
        <img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1">
        </form>`,
        blurb: `A classic microcontroller to bring any project to life. Connect servos, LEDs, switches, or other devices to the pins and program using the free <object><a href="https://www.arduino.cc/en/main/software">programming IDE provided by Arduino</a></object></object>.`,
        description: `With thousands of tutorials crafted by members of the community, the Uno is a great microcontroller for any beginner project. An Uno can be powered through the barrel jack, USB-B port, or directly through its pins, offering a wide range of options. A versatile tool, the Uno can be used anywhere from simple robotics applications to complex home automation. An Uno can even be extended to fit any project requirements due to the <object><a href="https://learn.sparkfun.com/tutorials/arduino-shields/all">dozens of different shields</a></object> available, including the <object><a href="/products/adafruit-motor-shield-v1">Adafruit Motor Shield v1</a></object>.`
    },
    {
        name: "Adafruit Motor Shield v1 Clone",
        link: "adafruit-motor-shield-v1",
        image: "adafruit-motor-shield-1.png",
        price: "$4.00",
        buy: `<form target="paypal" action="https://www.paypal.com/cgi-bin/webscr" method="post">
        <input type="hidden" name="cmd" value="_s-xclick">
        <input type="hidden" name="hosted_button_id" value="7UKZC36MC5JE4">
        <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_cart_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!">
        <img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1">
        </form>`,
        blurb: `Streamline and simplify projects that require multiple motors by adding this simple motor shield. Just mount the shield to an <object><a href="/products/uno">Uno</a></object>, add up to 4 DC motors, and plug a power source into the screw-down terminals to get started.`,
        description: `The <object><a href="/products/uno">Uno</a></object> on its own often can’t supply motors with the voltage and current they need. This shield provides a compact solution by adding ports for four DC motors and two servos, all powered by an external power source up to 25V. For help with setup and programming, check out <object><a href="https://learn.adafruit.com/adafruit-motor-shield/overview">Adafruit's step-by-step guide</a></object>.
        <br/><br/>
        If you’re going to be using this shield with a <object><a href="/products/bt06/">BT06 Bluetooth module</a></object>, check out the <object><a href="/products/chip0-1.png">Chip0</a></object> for a simple option to robustly connect the two.`
    },
    {
        name: "BT06",
        link: "bt06",
        image: "bt06-1.png",
        price: "$3.00",
        buy: `<form target="paypal" action="https://www.paypal.com/cgi-bin/webscr" method="post">
        <input type="hidden" name="cmd" value="_s-xclick">
        <input type="hidden" name="hosted_button_id" value="46CMEPGSCCULJ">
        <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_cart_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!">
        <img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1">
        </form>`,
        blurb: `A wireless Bluetooth module with an easy-to-use four-pin interface.  This module makes communicating with your project wirelessly a piece of cake by turning Bluetooth communication into a standard Serial port, allowing you to wirelessly send input to your microcontroller as if you were connected over USB.`,
        description: `BT06 modules have been a staple in wireless communication for small robotics projects for many years. They’re a great option to send input using Bluetooth Classic to an <object><a href="/products/uno">Uno</a></object> and a variety of other platforms.`
    },
    {
        name: "Chip0",
        link: "chip0",
        image: "chip0-1.png",
        price: "$2.00",
        buy: `<form target="paypal" action="https://www.paypal.com/cgi-bin/webscr" method="post">
        <input type="hidden" name="cmd" value="_s-xclick">
        <input type="hidden" name="hosted_button_id" value="UMT9FCF7RJ4PJ">
        <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_cart_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!">
        <img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1">
        </form>`,
        blurb: `The Chip0 (affectionately pronounced "chippo") robustly connects a <object><a href="/products/bt06">BT06 Bluetooth module</a></object> to an <object><a href="/products/adafruit-motor-shield-v1">Adafruit motor shield v1</a></object>.`,
        description: ``
    },
    // {
    //     name: "9g Servo",
    //     link: "9g-servo",
    //     image: "battleblue-2.jpg",
    //     price: "TBD",
    //     blurb: `Unlike traditional motors, these miniature actuators are able to rotate to precise angles. Weighing a miniscule 9 grams, these servos are a great way to add finer and more complex movement to your projects.`,
    //     description: `Simply hook it up to power, ground, and a PWM signal, and it’s ready to be used in any project from a miniature robotic arm to an intake mechanism. Comes with fasteners and three servo horns of various sizes.
    //     <br/><br/>
    //     <strong>Specifications</strong>
    //     <div style="margin-left: 10px">
    //         <li>180 degrees of rotation</li>
    //         <li>Size: 23 mm x 12.2 mm x 29 mm</li>
    //         <li>Angular velocity: 60 degrees / 0.3 seconds</li>
    //         <li>Max torque: 1.5 kg-cm</li>
    //         <li>Mass: 9g</li>
    //         <li>Working voltage: 4.2-6V</li>
    //     </div>`
    // },
    {
        name: "9V Battery Barrel Jack Cable",
        link: "9v-barrel-jack",
        image: "9v-barrel-jack-1.png",
        price: "$3.00",
        buy: `<form target="paypal" action="https://www.paypal.com/cgi-bin/webscr" method="post">
        <input type="hidden" name="cmd" value="_s-xclick">
        <input type="hidden" name="hosted_button_id" value="RYY2YVJLRCKZN">
        <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_cart_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!">
        <img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1">
        </form>`,
        blurb: `Just snap any 9V battery into this cable and connect the barrel jack to your board. It’s as simple as that!`,
        description: `These cables connect a 9 volt battery to any 5.5 mm x 2.1 mm female barrel jack. For robotics applications, these come highly recommended as a way to reduce the likelihood of a short from loose power or ground wires.`
    },
    // {
    //     name: "BattleBlue",
    //     link: "battleblue",
    //     image: "battleblue-2.jpg",
    //     price: "TBD",
    //     blurb: `Arm your latest battlebot project with this highly competent Alfredo-original robot control system. A low cost, lightweight solution to your most recent battle bots project, the BattleBlue has built in support for 2 DC motors and 2 PWM channels. Bypass the need for complex RC controls with the custom Alfredo Battle Blue app, capable of running on any android device.`,
    //     description: `Around the world, the sport of Combat Robotics is popular and growing. This
    //     is particularly true for the 150-gram, 1-pound, and 3-pound weight
    //     classes, with over 6500 fights in the last two years. Despite the
    //     popularity, the controls system used to wirelessly control robots was designed
    //     decades ago for RC aircraft, and today is seriously outdated and expensive.
    //     The Battleblue is a lightweight and inexpensive Bluetooth-based robot control system.<br/><br/>
    //     <strong>Key features:</strong>
    //     <div style="margin-left: 10px">
    //         <li>Small</li>
    //         <li>Lightweight</li>
    //         <li>Controls 2 brushed DC motors, perfect for a drivetrain</li>
    //         <li>2 configurable PWM channels, perfect for brushless ESCs or servos</li>
    //         <li>Controlled using a smartphone app instead of an expensive transmitter</li>
    //     </div>
    //     <br/>
    //     <strong>App features:</strong>
    //     <div style="margin-left: 10px">
    //         <li>Runs on any device with Android 7.0 and up</li>
    //         <li>Configurable on-screen joysticks, buttons, and sliders</li>
    //         <li>Built-in channel mixing</li>
    //         <li>Advanced channel mixing</li>
    //         <li>iOS and physical controller support coming soon</li>
    //     </div>
    //     <br/><hr/><br/>
	// 	<iframe src="https://docs.google.com/forms/d/e/1FAIpQLSfiqjvcJdVbMs6H7IabbahszrhP_y4192kgPJw7qlW_2tNQ1w/viewform?embedded=true" width=100% height=460px frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>`
    // },
    // {
    //     name: "E Deck",
    //     link: "e-deck",
    //     image: "e-deck-1.png",
    //     price: "$20.69",
    //     buy: `<form target="paypal" action="https://www.paypal.com/cgi-bin/webscr" method="post">
    //     <input type="hidden" name="cmd" value="_s-xclick">
    //     <input type="hidden" name="hosted_button_id" value="69LVA6B52TFWS">
    //     <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_cart_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!">
    //     <img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1">
    //     </form>`,
    //     blurb: `A deep-fried meme card deck.`,
    //     description: `
    //     <div style="margin-left: 10px">
    //         <li>We can absolutely guarantee these are the lowest quality high quality cards money can buy</li>
    //         <li>This is my magnum opus, I spent like 60hrs on it</li>
    //         <li>Full list of cards: <object><a href=http://bitly.com/98K8eH>http://bitly.com/98K8eH</a></object></li>
    //         <li>But don't just take our word for it, hear it from our customers:</li>
    //     </div>
    //     <blockquote>
    //     “Oh dude yea you gotta buy this deck. It doesn't come with a box and some of the cat memes kinda suck, but the cards are often quite hard to read”
    //     </blockquote>`
    // }
]
