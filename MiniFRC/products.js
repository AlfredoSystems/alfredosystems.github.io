let products = [
    {
        name: "MiniFRC Kit of Parts",
        link: "minifrc-kit-of-parts",
        image: "nou2-minifrc-kit-of-parts-1.png",
        price: "$34.43",
        buy: `<form target="paypal" action="https://www.paypal.com/cgi-bin/webscr" method="post">
        <input type="hidden" name="cmd" value="_s-xclick">
        <input type="hidden" name="hosted_button_id" value="MKYV4CPE43URU">
        <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_cart_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!">
        <img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1">
        </form>`,
        blurb: `This kit includes all of the fundamentals a robot needs to compete in MiniFRC. Comes with an ESP32 and NoU2.`,
        description: `This kit will give you and your team the basics to get yourself on the field. Comes with an <a href="/products/esp32/">ESP32</a> microcontroller and the Alfredo-custom <a href="/products/alfredo-nou2/">NoU2</a> motor shield. Check out our <a href="https://youtu.be/rcdbkeYA1rs">robot build tutorial</a> for help getting started.
        <br/><br/>
        <strong>This bundle contains:</strong>
        <div style="margin-left:10px">
            <ul class="browser-default">
            <li>1 <a href="/products/esp32">ESP32 microcontroller</a></li>
            <li>1 <a href="/products/alfredo-nou2">Alfredo NoU2 motor shield</a></li>
            <li>4 <a href="/products/tt-motor">TT motors and wheels</a></li>
            <li>1 <a href="/products/9v-li-ion-battery">rechargeable 9V Li-ion battery</a></li>
            <li>1 <a href="/products/9v-barrel-jack">9V barrel jack cable</a></li>
        </div>
        <em>Note: Alfredo Systems no longer sells Uno kits as a bundle. Components of the Uno kit are still for sale individually.</em>`
    },
    {
        name: "MiniFRC Charged Up Cube",
        link: "charged-up-cube",
        image: "charged-up-cube-1.png",
        price: "$1.00",
        buy: `<strong style="color: red">Out of stock.</strong><br/>`,
        // buy: `<form target="paypal" action="https://www.paypal.com/cgi-bin/webscr" method="post">
        // <input type="hidden" name="cmd" value="_s-xclick">
        // <input type="hidden" name="hosted_button_id" value="RAJA3ULW3JFAJ">
        // <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_cart_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!">
        // <img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1">
        // </form>`,
        blurb: "Purple Cube game piece for MiniFRC: Charged Up.",
        description: `
        Purple Cube game piece for MiniFRC: Charged Up. These lightweight cubes are custom cut from high density polyurethane foam. 
        <ul class="browser-default">
            <li>Dimensions: 2 in x 2 in x 2 in (nominal)</li>
            <li>Material: PU foam</li>
            <li>Mass: 2 g</li>
        <ul/>`
    },
    {
        name: "MiniFRC Charged Up Cone",
        link: "charged-up-cone",
        image: "charged-up-cone-1.png",
        price: "$1.00",
        buy: `<strong style="color: red">Out of stock.</strong><br/>`,
        // buy: `<form target="paypal" action="https://www.paypal.com/cgi-bin/webscr" method="post">
        // <input type="hidden" name="cmd" value="_s-xclick">
        // <input type="hidden" name="hosted_button_id" value="FZ68FMG4ESJJY">
        // <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_cart_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!">
        // <img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1">
        // </form>`,
        blurb: "Yellow Cone game piece for MiniFRC: Charged Up.",
        description: `
        Yellow Cone game piece for MiniFRC: Charged Up. These cones are 3D-printed custom for the 2023 MiniFRC game using a Prusa i3 Mk3. 3D printing is not a perfect technology, and as such some cones may have “aesthetic blemishes” (strings/boogers). We only QA pass cones that meet our standards and guarantee all dimensions are nominally correct.
        <ul class="browser-default">
            <li>Dimensions: 2 in x 2 in x 3 in (nominal)</li>
            <li>Material: Shore 95A TPU</li>
            <li>Mass: 14 g</li>
        <ul/>`
    },
    {
        name: "9V Rechargable Li-ion Battery",
        link: "9v-li-ion-battery",
        image: "9v-li-ion-battery-1.png",
        price: "$6.31",
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
        price: "$13.27",
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
        For more details, see our <a href="https://docs.google.com/document/d/1xatrMuHrZ7HsmaopmlK5GsymU6mwvFDWN0sumO9AQQ0/edit?usp=sharing">hardware documentation</a> and <a href="https://youtu.be/rcdbkeYA1rs">robot build tutorial</a>. To get started programming your NoU2, see our <a href="https://github.com/AlfredoSystems/Alfredo-NoU2">software library</a>, which will walk you through the basics of uploading code to an ESP32 and getting a NoU2 moving.
        <br\><br\>
        Resources:
        <ul class="browser-default">
            <li><a href="/downloads/Alfredo NoU2 (ACP).SLDPRT" download>CAD (.SLDPRT)</a></li>
            <li><a href="https://github.com/AlfredoSystems/Alfredo-NoU2">Software library (GitHub)</a></li>
            <li><a href="https://docs.google.com/document/d/1xatrMuHrZ7HsmaopmlK5GsymU6mwvFDWN0sumO9AQQ0/edit?usp=sharing">Hardware documentation (Google Docs)</a></li>
            <li><a href="https://youtu.be/rcdbkeYA1rs">Robot build tutorial (YouTube)</a></li>
        </ul>`
    },
    {
        name: "ESP32",
        link: "esp32",
        image: "esp32-1.png",
        price: "$6.71",
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
        price: "$1.87",
        buy: `<form target="paypal" action="https://www.paypal.com/cgi-bin/webscr" method="post">
        <input type="hidden" name="cmd" value="_s-xclick">
        <input type="hidden" name="hosted_button_id" value="5H5AX8XYDEUWE">
        <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_cart_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!">
        <img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1">
        </form>`,
        blurb: `The classic yellow motor. Often used in small robot drivetrains, this wheel comes equipped with a gearbox for added torque. Corresponding <object><a href="/products/tt-wheel">TT wheel</a></object> sold separately.`,
        description: `For years, TT motors have been used as the workhorse drive motors for smaller-sized robots. They’re easy to mount and each has an integrated gearbox to ensure the motors have a manageable drive speed. TT motors are compatible with both the <object><a href="alfredo-nou2">Alfredo NoU</a></object> system and <object><a href="adafruit-motor-shield-v1">Adafruit Motor Shield</a></object> systems. Comes with wires pre-soldered. <strong style="color: red">TT wheel sold separately</strong>.
        <br/><br/>
        <strong>Specifications</strong>
        <div style="margin-left: 10px">
            <li>Motor speed (9V): 320 RPM</li>
            <li>No load current: 112 mA</li>
            <li>Stall current: 0.98 A</li>
            <li>Maximum voltage: 9V</li>
            <li>Mass: 25g</li>
        </div>
        <br\><br\>
        Resources:
        <ul class="browser-default">
            <li><a href="/downloads/TT Motor (ACP).SLDPRT" download>Motor CAD (.SLDPRT)</a></li>
        </ul>`
    },
    {
        name: "TT Wheel",
        link: "tt-wheel",
        image: "tt-wheel-1.png",
        price: "$0.99",
        buy: `<form target="paypal" action="https://www.paypal.com/cgi-bin/webscr" method="post">
        <input type="hidden" name="cmd" value="_s-xclick">
        <input type="hidden" name="hosted_button_id" value="ANPLQ5PTKT9WY">
        <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_cart_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!">
        <img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1">
        </form>`,
        blurb: `The classic yellow wheel. Often used in small robot drivetrains, this wheel connects perfectly to any <object><a href="/products/tt-motor">TT Motor</a></object>.`,
        description: `An inexpensive and reliable wheel that will keep your robot moving forward. For years, TT wheels have been used as the workhorse drivetrain solution for smaller sized robots. They’re easy to connect to the output of a <object><a href="/products/tt-motor">TT motor</a></object>.
        <br/><br/>
        <strong>Specifications</strong>
        <div style="margin-left: 10px">
            <li>Diameter: 67 mm</li>
            <li>Mass: 29g</li>
        </div>
        <br\><br\>
        Resources:
        <ul class="browser-default">
            <li><a href="/downloads/TT Wheel (ACP).SLDPRT" download>Wheel CAD (.SLDPRT)</a></li>
        </ul>`
    },
    {
        name: "N20 Motor",
        link: "n20-motor",
        image: "n20-motor-1.png",
        price: "$5.33",
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
        name: "9g Servo",
        link: "9g-servo",
        image: "9g-servo-1.png",
        price: "$3.27",
        buy: `<form target="paypal" action="https://www.paypal.com/cgi-bin/webscr" method="post">
        <input type="hidden" name="cmd" value="_s-xclick">
        <input type="hidden" name="hosted_button_id" value="KWWTS5ZQSVD5S">
        <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_cart_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!">
        <img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1">
        </form>`,
        blurb: `These miniature actuators are used to move to precise angles. Weighing a total of 9 grams, these servos are a great way to add finer and more complex movement to your projects.`,
        description: `Hook it up to power, ground, and a PPM signal, and it’s ready to be used in any project from a miniature robotic arm to an intake mechanism. Comes with fasteners and three servo horns of various sizes.
        <br/><br/>
        <strong>Specifications</strong>
        <div style="margin-left: 10px">
            <li>Range: 180 degrees</li>
            <li>Size: 22.8 mm × 12.2 mm × 31.4 mm</li>
            <li>Angular velocity: 60 degrees / 0.3 seconds</li>
            <li>Max torque: 1.5 kg·cm</li>
            <li>Mass: 9 g</li>
            <li>Working voltage: 4.2 V–6 V</li>
            <li>Three servo horns included</li>
        </div>`
    },
    {
        name: "50g Servo",
        link: "50g-servo",
        image: "50g-servo-1.png",
        price: "$5.93",
        buy: `<form target="paypal" action="https://www.paypal.com/cgi-bin/webscr" method="post">
        <input type="hidden" name="cmd" value="_s-xclick">
        <input type="hidden" name="hosted_button_id" value="7CNRKCW5NLEXW">
        <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_cart_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!">
        <img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1">
        </form>`,
        blurb: `These actuators are the bigger brother of the 9g servo. Weighing a total of 50 grams, these servos are a great way to add strong and precise movement to your projects.`,
        description: `Hook it up to power, ground, and a PPM signal, and it’s ready to be used in any project from a miniature robotic arm to an intake mechanism. Comes with fasteners and four servo horns of various sizes.
        <br/><br/>
        <strong>Specifications</strong>
        <div style="margin-left: 10px">
            <li>Range: 180 degrees</li>
            <li>Size: 20 mm × 40 mm × 41 mm</li>
            <li>Angular velocity: 60 rpm</li>
            <li>Max torque: 13 kg·cm</li>
            <li>Mass: 50 g</li>
            <li>Working voltage: 3 V–7.2 V</li>
            <li>Four servo horns included</li>
        </div>`
    },
    {
        name: "Arduino Uno Clone",
        link: "uno",
        image: "arduino-uno-1.png",
        price: "$4.65",
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
        price: "$4.65",
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
        price: "$3.32",
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
        unlisted: true,
        link: "chip0",
        image: "chip0-1.png",
        price: "$1.37",
        buy: `<form target="paypal" action="https://www.paypal.com/cgi-bin/webscr" method="post">
        <input type="hidden" name="cmd" value="_s-xclick">
        <input type="hidden" name="hosted_button_id" value="UMT9FCF7RJ4PJ">
        <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_cart_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!">
        <img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1">
        </form>`,
        blurb: `The Chip0 (affectionately pronounced "chippo") robustly connects a <object><a href="/products/bt06">BT06 Bluetooth module</a></object> to an <object><a href="/products/adafruit-motor-shield-v1">Adafruit motor shield v1</a></object>.`,
        description: ``
    },
    {
        name: "9V Battery Barrel Jack Cable",
        link: "9v-barrel-jack",
        image: "9v-barrel-jack-1.png",
        price: "$2.93",
        buy: `<form target="paypal" action="https://www.paypal.com/cgi-bin/webscr" method="post">
        <input type="hidden" name="cmd" value="_s-xclick">
        <input type="hidden" name="hosted_button_id" value="RYY2YVJLRCKZN">
        <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_cart_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!">
        <img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1">
        </form>`,
        blurb: `Just snap any 9V battery into this cable and connect the barrel jack to your board. It’s as simple as that!`,
        description: `These cables connect a 9 volt battery to any 5.5 mm x 2.1 mm female barrel jack. For robotics applications, these come highly recommended as a way to reduce the likelihood of a short from loose power or ground wires.`
    },
    {
        name: "Mini Screwdriver",
        link: "mini-screwdriver",
        image: "mini-screwdriver-1.png",
        price: "$0.50",
        buy: `<form target="paypal" action="https://www.paypal.com/cgi-bin/webscr" method="post">
        <input type="hidden" name="cmd" value="_s-xclick">
        <input type="hidden" name="hosted_button_id" value="EKDRU7E7WM2JE">
        <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_cart_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!">
        <img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1">
        </form>`,
        blurb: "Phillips head mini-screwdriver, good for NoU2 terminals.",
        description: `
        Ever go to tighten down the terminal blocks on the NoU2, but you don’t have a precision screwdriver? This mini screwdriver is perfect for the NoU2 terminal blocks. We carry these to help out folks who don't have labs or tools but want to build robots.
        <ul class="browser-default">
            <li>Length: 1.75 in</li>
            <li>Mass: 1.2 g</li>
        <ul/>`
    },
    {
        name: "Micro-USB Cable",
        link: "microusb",
        image: "microusb-1.png",
        price: "$2.00",
        buy: `<form target="paypal" action="https://www.paypal.com/cgi-bin/webscr" method="post">
        <input type="hidden" name="cmd" value="_s-xclick">
        <input type="hidden" name="hosted_button_id" value="BGQ3TECH5NN6Y">
        <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_cart_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!">
        <img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1">
        </form>`,
        blurb: "3-ft Micro-USB cable for ESP32s and charging 9V Li-ion batteries.",
        description: `
        As USB-C takes over, fewer and fewer people have Micro-USB cables laying around. If that's you, then we have you covered. This 3-ft Micro-USB cable is just what you need. Micro-USB cables are important to MiniFRC teams so they can upload code to their ESP32s and charge their 9V Li-ion batteries.
        <ul class="browser-default">
            <li>Length: 3 ft</li>
            <li>Mass: 12 g</li>
        <ul/>`
    },
    {
        name: "Power Cell",
        unlisted: true,
        link: "power-cell",
        image: "power-cell-1.png",
        price: "$0.67",
        buy: `<form target="paypal" action="https://www.paypal.com/cgi-bin/webscr" method="post">
        <input type="hidden" name="cmd" value="_s-xclick">
        <input type="hidden" name="hosted_button_id" value="7NEMB2BWQ4ZPG">
        <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_cart_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!">
        <img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1">
        </form>`,
        blurb: "Tiny 1.5\" foam power cell for MiniFRC: Infinite Recharge.",
        description: `
        <ul class="browser-default">
            <li>Nominal diameter: 1.5 in</li>
            <li>Material: foam</li>
            <li>Expression: &nbsp; ：）</li>
        <ul/>`
    },
]