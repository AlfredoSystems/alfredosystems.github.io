let products = [
    {
        name: "MiniFRC Kit of Parts",
        link: "minifrc-kit-of-parts",
        image: "nou2-minifrc-kit-of-parts-1.jpg",
        price: "$35.00 - $40.00",
        //buy: `<strong style="color: red">Out of stock.</strong><br/>`,
        //<option value="NoU2"> NoU2 $35.00 USD </option>
        buy: `<form target="paypal" action="https://www.paypal.com/cgi-bin/webscr" method="post">
        <input type="hidden" name="cmd" value="_s-xclick">
        <input type="hidden" name="hosted_button_id" value="MKYV4CPE43URU">
        <input type="hidden" name="on0" value="Varient:">Varient:
        <select class="browser-default" name="os0" style="width: 200px">
          <option value="NoU3"> NoU3 $40.00 USD </option>
        </select>
        <div style="height: 10px"/>
        <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_cart_LG.gif" border="0" name="submit" alt="PayPal">
        <img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1">
        </form>`,
        blurb: `This kit includes all of the fundamentals a robot needs to compete in MiniFRC. Comes with NoU, motors, battery, and more.`,
        description: `This kit will give you and your team the basics to get yourself on the field. Check out our <a href="https://youtu.be/rcdbkeYA1rs">robot build tutorial</a> for help getting started.
        <br/><br/>
        <strong>This bundle contains:</strong>
        <div style="margin-left:10px">
            <ul class="browser-default">
            <li>4 <a href="/products/tt-motor">TT motors and wheels</a></li>
            <li>1 <a href="/products/9v-li-ion-battery">rechargeable 9V Li-ion battery</a></li>
            <li>1 <a href="/products/9v-barrel-jack">9V barrel jack cable</a></li>
        </div>
        <br/>
        <strong>NoU3 varient includes:</strong>
        <div style="margin-left:10px">
            <ul class="browser-default">
            <li>1 <a href="/products/esp32">ESP32 microcontroller</a></li>
            <li>1 <a href="/products/alfredo-nou2">Alfredo NoU2</a></li>
        </div>
        <br/>
        <strong>NoU3 varient includes:</strong>
        <div style="margin-left:10px">
            <ul class="browser-default">
            <li>1 <a href="/products/alfredo-nou3">Alfredo NoU3</a></li>
        </div>`
    },
    {
        name: "9V Rechargable Li-ion Battery",
        link: "9v-li-ion-battery",
        image: "9v-li-ion-battery-1.jpg",
        price: "$6.31",
        blurb: `More powerful than ones you'll find on store shelves, these Li-ion 9V batteries are perfect for powering small projects that require more current than conventional AAs and 9Vs. Comes complete with a built-in micro USB port for recharging.`,
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
            <li><a href="https://cad.onshape.com/documents/ea965d4ce80ccd296b5afb94/w/3eb5d4d7aff49c1380c0f78a/e/9b89d15597199d74b8685b98?renderMode=0&uiState=68126de7672a723c74bd1359">OnShape CAD</a></li>
        </ul>`
    },
    {
        name: "MiniFRC Reefscape Algae",
        link: "reefscape-algae",
        image: "reefscape-algae.jpg",
        price: "$2.00",
        buy: `<form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_blank">
        <input type="hidden" name="cmd" value="_s-xclick" />
        <input type="hidden" name="hosted_button_id" value="PWPE3KZVECZLY" />
        <input type="hidden" name="currency_code" value="USD" />
        <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_cart_LG.gif" border="0" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Add to Cart" />
        </form>`,
        blurb: "Foam ball game piece for MiniFRC: Reefscape.",
        description: `
        Aqua ball game piece for MiniFRC: Reefscape. These lightweight foam balls are custom printed with the MiniFRC logo!
        
        <ul class="browser-default">
            <li>Dimensions: 2.70 inch nominal OD</li>
            <li>Material: foam</li>
            <li>Mass: 26g</li>
        <ul/>`
    },
    {
        name: "MiniFRC Reefscape Coral",
        link: "reefscape-coral",
        image: "reefscape-coral.jpg",
        price: "$1.00",
        buy: `<form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_blank">
        <input type="hidden" name="cmd" value="_s-xclick" />
        <input type="hidden" name="hosted_button_id" value="XFLJPF2DY8T46" />
        <input type="hidden" name="currency_code" value="USD" />
        <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_cart_LG.gif" border="0" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Add to Cart" />
        </form>`,
        blurb: "Plastic pipe game piece for MiniFRC: Reefscape.",
        description: `
        Plastic pipe game piece for MiniFRC: Reefscape. Why arn't they cut PVC pipes? Stop asking questions!
        
        <ul class="browser-default">
            <li>Dimensions: 1.2 inch diameter, 2.6 inches long</li>
            <li>Material: PLA</li>
            <li>Mass: 14g</li>
        <ul/>`
    },
    {
        name: "NoU3 BETA",
        link: "alfredo-nou3",
        image: "nou3-1.jpg",
        price: "$24.99",
        buy: `<form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_blank">
        <input type="hidden" name="cmd" value="_s-xclick" />
        <input type="hidden" name="hosted_button_id" value="QSEZ9DXZAXF6C" />
        <input type="hidden" name="currency_code" value="USD" />
        <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_cart_LG.gif" border="0" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Add to Cart" />
        </form>`,
        blurb: `The NoU3 is the core of any amazing robot. Motor control, servo control, wireless capabilities, inertial measurement, and more. All in one package.`,
        description: `Five years after the release of the NoU2, and following 18 months of developement, Alfredo Systems is proud to offer the NoU3! This is our Magnum Opus. Perfect for powering any little robot. An all-in-one solution. Features:
        <ul class="browser-default">
            <li>Built in ESP32-S3 means no extra dev-board "hat" required. All in one!</li>
            <li>8 DC motor ports. (Two more than the NoU2, Double that of the original NoU!)</li>
            <li>6 of the motor ports are alternitively accessible through 6 pin JST-SH connectors, providing easy encoder support. (For example, with <a href="https://www.sparkfun.com/products/24053">these</a> motors).</li>
            <li>Built in accelerometer, gyroscope, and magnetometer for 9 DOF sensor fusion.</li>
            <li>USB-C for reliable code upload</li>
            <li>Great power management: switch mode regulators and high bulk capacatance means reduced risk of brownouts</li>
            <li><a href="https://www.sparkfun.com/qwiic">Qwiic compatible!</a></li>
        </ul>
        <br\><br\>
        <b>Why is the NoU3 in Beta?</b>
        <br\>
        The hardware design for the NoU3 is finailzed. The reason the NoU3 is in Beta is because software support and documentation is a work in progress. All the features you would expect like motors, servos, and wireless connection is supported. Here is what is coming soon to the NoU3 Arduino library:
        <li>9 DOF sensor reading</li>
        <li>Sensor fusion</li>
        <li>Encoder support</li>
        <li>Improved upload stability</li>
        <br\><br\>
        For more details, see our robot build tutorial (coming soon!). To get started programming your NoU3, see our <a href="https://alfredo-nou3.readthedocs.io/robot_programming_tutorial_Pesto_Link.html">programming tutorial</a>, which will walk you through the basics of uploading code and getting a NoU3 moving.
        <br\><br\>
        Resources:
        <ul class="browser-default">
        <li><a href="https://alfredo-nou3.readthedocs.io/hardware_documentation.html">Hardware Documentation (ReadTheDocs)</a></li>
        <li><a href="https://alfredo-nou3.readthedocs.io/api_reference.html">Software Documentation (ReadTheDocs)</a></li>
        <li><a href="https://github.com/AlfredoSystems/Alfredo-NoU3">Arduino Software Library (GitHub)</a></li>
        <li><a href="https://cad.onshape.com/documents/ea965d4ce80ccd296b5afb94/w/3eb5d4d7aff49c1380c0f78a/e/9b89d15597199d74b8685b98?renderMode=0&uiState=68126de7672a723c74bd1359">CAD file (OnShape)</a></li>
        <li><a href="https://github.com/AlfredoSystems/NoU3-Hardware">Hardware Files (GitHub)</a></li>
        </ul>`
    },
    {
        name: "NoU2",
        link: "alfredo-nou2",
        image: "nou2-1.jpg",
        price: "$13.27",
        buy: `<strong style="color: red">Out of stock.</strong><br/>`,
        //buy: `<form target="paypal" action="https://www.paypal.com/cgi-bin/webscr" method="post">
        //    <input type="hidden" name="cmd" value="_s-xclick">
        //    <input type="hidden" name="hosted_button_id" value="7CB7HWP37ALSE">
        //    <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_cart_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!">
        //    <img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1">
        //    </form>`,
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
            <li><a href="https://alfredo-nou2.readthedocs.io/en/latest/robot_programming_tutorial_Pesto_Link.html">Software Tutorial (ReadTheDocs)</a></li>
            <li><a href="https://cad.onshape.com/documents/ea965d4ce80ccd296b5afb94/w/3eb5d4d7aff49c1380c0f78a/e/9b89d15597199d74b8685b98?renderMode=0&uiState=68126de7672a723c74bd1359">OnShape CAD</a></li>
            <li><a href="https://github.com/AlfredoSystems/Alfredo-NoU2">Software library (GitHub)</a></li>
            <li><a href="https://docs.google.com/document/d/1xatrMuHrZ7HsmaopmlK5GsymU6mwvFDWN0sumO9AQQ0/edit?usp=sharing">Hardware documentation (Google Docs)</a></li>
            <li><a href="https://youtu.be/rcdbkeYA1rs">Robot build tutorial (YouTube)</a></li>
        </ul>`
    },
    {
        name: "ESP32",
        link: "esp32",
        image: "esp32-1.jpg",
        price: "$6.71",
        //buy: `<strong style="color: red">Out of stock.</strong><br/>`,
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
        image: "tt-motor-1.jpg",
        price: "$1.87",
        buy: `<form target="paypal" action="https://www.paypal.com/cgi-bin/webscr" method="post">
        <input type="hidden" name="cmd" value="_s-xclick">
        <input type="hidden" name="hosted_button_id" value="5H5AX8XYDEUWE">
        <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_cart_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!">
        <img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1">
        </form>`,
        blurb: `The classic yellow motor. Often used in small robot drivetrains, this wheel comes equipped with a gearbox for added torque. Corresponding <object><a href="/products/tt-wheel">TT wheel</a></object> sold separately.`,
        description: `For years, TT motors have been used as the workhorse drive motors for smaller-sized robots. They’re easy to mount and each has an integrated gearbox to ensure the motors have a manageable drive speed. TT motors are compatible with the <object><a href="alfredo-nou2">Alfredo NoU</a></object> system. Comes with wires pre-soldered. <strong style="color: red">TT wheel sold separately</strong>.
        <br/><br/>
        <table class="striped" style="width: auto">
            <thead><tr><th align="center">TT Motor Specifications</th></tr></thead>
            <tr><th>RPM at 9V</th><th>Stall torque</th><th>Stall current</th><th>No load current</th></tr>
            <tr><th>320 RPM</th>  <td>2.7 kg-cm</td>  <td>0.98 A</td>       <td>112 mA</td>          <tr>
        </table>
        <br/><br/>
        <div style="margin-left: 10px">
            <li>Mass: 25g</li>
            <li>Max Voltage: 9V</li>
        </div>
        <br/>
        Resources:
        <ul class="browser-default">
            <li><a href="https://cad.onshape.com/documents/ea965d4ce80ccd296b5afb94/w/3eb5d4d7aff49c1380c0f78a/e/9b89d15597199d74b8685b98?renderMode=0&uiState=68126de7672a723c74bd1359">OnShape CAD</a></li>
        </ul>`
    },
    {
        name: "TT Wheel",
        link: "tt-wheel",
        image: "tt-wheel-1.jpg",
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
        <br/>
        Resources:
        <ul class="browser-default">
            <li><a href="https://cad.onshape.com/documents/ea965d4ce80ccd296b5afb94/w/3eb5d4d7aff49c1380c0f78a/e/9b89d15597199d74b8685b98?renderMode=0&uiState=68126de7672a723c74bd1359">OnShape CAD</a></li>
        </ul>`
    },
    {
        name: "N20 Motor",
        link: "n20-motor",
        image: "n20-motor-1.jpg",
        price: "<s>$5.33</s> $4.49",
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
        description: `These tiny brushed DC gearmotors weight just 10 grams. They come in three ratios and can be supplied up to 9V.
        </br></br>
        <table class="striped" style="width: auto">
            <thead><tr><th align="center">N20 Motor Specifications</th></tr></thead>
            <tr><th>RPM at 9V</th><th>Stall torque</th><th>Stall current</th><th>No load current</th></tr>
            <tr><th>290 RPM</th>  <td>1.55 kg-cm</td>  <td>0.88 A</td>       <td>45 mA</td>          <tr>
            <tr><th>650 RPM</th>  <td>0.75 kg-cm</td>  <td>0.61 A</td>       <td>41 mA</td>          <tr>
            <tr><th>1350 RPM</th> <td>0.25 kg-cm</td>  <td>0.30 A</td>       <td>30 mA</td>          <tr>
        </table><br/>
        <br\>
        Resources:
        <ul class="browser-default">
            <li><a href="https://cad.onshape.com/documents/ea965d4ce80ccd296b5afb94/w/3eb5d4d7aff49c1380c0f78a/e/9b89d15597199d74b8685b98?renderMode=0&uiState=68126de7672a723c74bd1359">OnShape CAD</a></li>
        </ul>`
    },
    {
        name: "Encodered N20 Motor",
        link: "n20-motor-with-encoder",
        image: "n20-motor-with-encoder-1.jpg",
        price: "$6.49",
        buy: `<form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_blank">
        <input type="hidden" name="cmd" value="_s-xclick" />
        <input type="hidden" name="hosted_button_id" value="YKN6G38RUW2J4" />
        <input type="hidden" name="currency_code" value="USD" />
        <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_cart_LG.gif" border="0" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Add to Cart" />
        </form>`,
        blurb: `N20 motors are compact and versatile gearbox/motor combo nearly as powerful as <object><a href="/products/tt-motor">TT motors</a></object> at one-third the weight. These brushed DC motors are perfect for manipulator and intake mechanisms in your next robotics project.`,
        description: `These tiny brushed DC gearmotors weight just 10 grams and can be supplied up to 9V.
        </br></br>
        This version comes with a quadrature encorder and 6 pin JST-SH cable, designed for compatibility with the NoU3 encoder ports.
        </br></br>
        <table class="striped" style="width: auto">
            <thead><tr><th align="center">N20 Motor Specifications</th></tr></thead>
            <tr><th>RPM at 9V</th><th>Stall torque</th><th>Stall current</th><th>No load current</th></tr>
            <tr><th>650 RPM</th>  <td>0.76 kg-cm</td>  <td>0.60 A</td>       <td>43 mA</td>          <tr>
        </table>
        <br/><br/>
        Resources:
        <ul class="browser-default">
            <li><a href="https://cad.onshape.com/documents/ea965d4ce80ccd296b5afb94/w/3eb5d4d7aff49c1380c0f78a/e/9b89d15597199d74b8685b98?renderMode=0&uiState=68126de7672a723c74bd1359">OnShape CAD</a></li>
        </ul>`
    },
    {
        name: "9g Servo",
        link: "9g-servo",
        image: "9g-servo-1.jpg",
        price: "$3.27",
        buy: `<form target="paypal" action="https://www.paypal.com/cgi-bin/webscr" method="post">
        <input type="hidden" name="cmd" value="_s-xclick">
        <input type="hidden" name="hosted_button_id" value="KWWTS5ZQSVD5S">
        <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_cart_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!">
        <img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1">
        </form>`,
        blurb: `These miniature actuators are used to move to precise angles. Weighing a total of 9 grams, these servos are a great way to add finer and more complex movement to your projects.`,
        description: `Hook it up to power, ground, and a PPM signal, and it's ready to be used in any project from a miniature robotic arm to an intake mechanism. Comes with fasteners and three servo horns of various sizes.
        <br/><br/>
        <strong>Specifications</strong>
        <div style="margin-left: 10px">
            <li>Range: 180 degrees</li>
            <li>Size: 22.8 mm x 12.2 mm x 31.4 mm</li>
            <li>Angular velocity: 60 degrees / 0.3 seconds</li>
            <li>Max torque: 1.5 kg·cm</li>
            <li>Mass: 9 g</li>
            <li>Working voltage: 4.2 V-6 V</li>
            <li>Three servo horns included</li>
        </div>
        <br/><br/>
        Resources:
        <ul class="browser-default">
            <li><a href="https://cad.onshape.com/documents/ea965d4ce80ccd296b5afb94/w/3eb5d4d7aff49c1380c0f78a/e/9b89d15597199d74b8685b98?renderMode=0&uiState=68126de7672a723c74bd1359">OnShape CAD</a></li>
        </ul>`
    },
    {
        name: "50g Servo",
        link: "50g-servo",
        image: "50g-servo-1.jpg",
        price: "$5.93",
        buy: `<form target="paypal" action="https://www.paypal.com/cgi-bin/webscr" method="post">
        <input type="hidden" name="cmd" value="_s-xclick">
        <input type="hidden" name="hosted_button_id" value="7CNRKCW5NLEXW">
        <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_cart_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!">
        <img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1">
        </form>`,
        blurb: `These actuators are the bigger brother of the 9g servo. Weighing a total of 50 grams, these servos are a great way to add strong and precise movement to your projects.`,
        description: `Hook it up to power, ground, and a PPM signal, and it's ready to be used in any project from a miniature robotic arm to an intake mechanism. Comes with fasteners and four servo horns of various sizes.
        <br/><br/>
        <strong>Specifications</strong>
        <div style="margin-left: 10px">
            <li>Range: 180 degrees</li>
            <li>Size: 20 mm x 40 mm x 41 mm</li>
            <li>Angular velocity: 60 rpm</li>
            <li>Max torque: 13 kg·cm</li>
            <li>Mass: 50 g</li>
            <li>Working voltage: 3 V-7.2 V</li>
            <li>Four servo horns included</li>
        </div>
        <br/><br/>
        Resources:
        <ul class="browser-default">
            <li><a href="https://cad.onshape.com/documents/ea965d4ce80ccd296b5afb94/w/3eb5d4d7aff49c1380c0f78a/e/9b89d15597199d74b8685b98?renderMode=0&uiState=68126de7672a723c74bd1359">OnShape CAD</a></li>
        </ul>`
    },
    {
        name: "Arduino Uno Clone",
        link: "uno",
        image: "arduino-uno-1.jpg",
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
        image: "adafruit-motor-shield-1.jpg",
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
        If you're going to be using this shield with a <object><a href="/products/bt06/">BT06 Bluetooth module</a></object>, check out the <object><a href="/products/chip0-1.jpg">Chip0</a></object> for a simple option to robustly connect the two.`
    },
    {
        name: "BT06",
        link: "bt06",
        image: "bt06-1.jpg",
        price: "$3.32",
        buy: `<form target="paypal" action="https://www.paypal.com/cgi-bin/webscr" method="post">
        <input type="hidden" name="cmd" value="_s-xclick">
        <input type="hidden" name="hosted_button_id" value="46CMEPGSCCULJ">
        <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_cart_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!">
        <img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1">
        </form>`,
        blurb: `A wireless Bluetooth module with an easy-to-use four-pin interface.  This module makes communicating with your project wirelessly a piece of cake by turning Bluetooth communication into a standard Serial port, allowing you to wirelessly send input to your microcontroller as if you were connected over USB.`,
        description: `BT06 modules have been a staple in wireless communication for small robotics projects for many years. They're a great option to send input using Bluetooth Classic to an <object><a href="/products/uno">Uno</a></object> and a variety of other platforms.`
    },
    {
        name: "Chip0",
        unlisted: true,
        link: "chip0",
        image: "chip0-1.jpg",
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
        image: "9v-barrel-jack-1.jpg",
        price: "<s>$2.93</s> $1.50",
        buy: `<form target="paypal" action="https://www.paypal.com/cgi-bin/webscr" method="post">
        <input type="hidden" name="cmd" value="_s-xclick">
        <input type="hidden" name="hosted_button_id" value="RYY2YVJLRCKZN">
        <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_cart_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!">
        <img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1">
        </form>`,
        blurb: `Just snap any 9V battery into this cable and connect the barrel jack to your board. It's as simple as that!`,
        description: `These cables connect a 9 volt battery to any 5.5 mm x 2.1 mm female barrel jack. For robotics applications, these come highly recommended as a way to reduce the likelihood of a short from loose power or ground wires.`
    },
    {
        name: "Right Angled 9V Battery Barrel Jack Cable",
        link: "9v-barrel-jack-right-angled",
        image: "9v-barrel-jack-right-angle-1.jpg",
        price: "$1.99",
        buy: `<form target="paypal" action="https://www.paypal.com/cgi-bin/webscr" method="post">
        <input type="hidden" name="cmd" value="_s-xclick">
        <input type="hidden" name="hosted_button_id" value="Z6PMCXJWT8KV8">
        <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_cart_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!">
        <img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1">
        </form>`,
        blurb: `A right angled form factor for the common 9V barrel jack cable.`,
        description: `These cables connect a 9 volt battery to any 5.5 mm x 2.1 mm female barrel jack. For robotics applications, now in a right-angled form factor!`
    },
    {
        name: "Mini Screwdriver",
        link: "mini-screwdriver",
        image: "mini-screwdriver-1.jpg",
        price: "$0.50",
        buy: `<form target="paypal" action="https://www.paypal.com/cgi-bin/webscr" method="post">
        <input type="hidden" name="cmd" value="_s-xclick">
        <input type="hidden" name="hosted_button_id" value="EKDRU7E7WM2JE">
        <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_cart_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!">
        <img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1">
        </form>`,
        blurb: "Phillips head mini-screwdriver, good for NoU2 terminals.",
        description: `
        Ever go to tighten down the terminal blocks on the NoU2, but you don't have a precision screwdriver? This mini screwdriver is perfect for the NoU2 terminal blocks. We carry these to help out folks who don't have labs or tools but want to build robots.
        <ul class="browser-default">
            <li>Length: 1.75 in</li>
            <li>Mass: 1.2 g</li>
        <ul/>`
    },
    {
        name: "Micro-USB Cable",
        link: "microusb",
        image: "microusb-1.jpg",
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
        name: "USB-C Cable",
        link: "usbc",
        image: "usbc-1.jpg",
        price: "$2.00",
        buy: `<form target="paypal" action="https://www.paypal.com/cgi-bin/webscr" method="post">
        <input type="hidden" name="cmd" value="_s-xclick">
        <input type="hidden" name="hosted_button_id" value="U88NVYZ3GXPVW">
        <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_cart_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!">
        <img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1">
        </form>`,
        blurb: "3-ft USB-C cable for NoU3.",
        description: `
        USB-C Cables are important to MiniFRC teams so they can upload code to their NoU3s.
        <ul class="browser-default">
            <li>Length: 3 ft</li>
            <li>Mass: 12 g</li>
        <ul/>`
    },
    {
        name: "MiniFRC Crescendo Note",
        link: "crescendo-note",
        image: "crescendo-note.jpg",
        price: "$1.00",
        buy: `<form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_blank">
        <input type="hidden" name="cmd" value="_s-xclick" />
        <input type="hidden" name="hosted_button_id" value="P3UW8NTWSL6DN" />
        <input type="hidden" name="currency_code" value="USD" />
        <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_cart_LG.gif" border="0" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Add to Cart" />
        </form>`,
        blurb: "Orange ring game piece for MiniFRC: Crescendo.",
        description: `
        Orange ring game piece for MiniFRC: Crescendo. These lightweight rings are custom cut from jumbo pool noodles.
        
        <ul class="browser-default">
            <li>Dimensions: 3.5 in OD x 1 in ID x 0.5in thick</li>
            <li>Material: PU foam</li>
            <li>Mass: 2 g</li>
        <ul/>`
    },
    {
        name: "Mini Flywheel: Wagon Wheels",
        link: "wagon-wheel",
        image: "wagon-wheels.jpg",
        price: "$1.00",
        buy: `<form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_blank">
        <input type="hidden" name="cmd" value="_s-xclick" />
        <input type="hidden" name="hosted_button_id" value="MXBGDMP8UMYY2" />
        <input type="hidden" name="currency_code" value="USD" />
        <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_cart_LG.gif" border="0" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Add to Cart" />
        </form>`,
        blurb: "Green Flywheel designed for shooting MiniFRC Crescendo Notes.",
        description: `
        Named after the pasta, these flywheels are meant to make playing MiniFRC Cresendo easier for everyone. These flywheels are designed for motors with 2mm shafts, like the ones found on TT-motors. check out our guide on <a href="https://www.alfredosys.com/news/tt-motor-flywheel-guide/">how to disassemble a TT-motor</a> to be used with a flywheel.

        The design is <a href="https://cad.onshape.com/documents/ea965d4ce80ccd296b5afb94/w/3eb5d4d7aff49c1380c0f78a/e/9b89d15597199d74b8685b98?renderMode=0&uiState=68126de7672a723c74bd1359">open source on OnShape</a>, feel free to print your own!
        <ul class="browser-default">
            <li>Dimensions: 34mm diameter x 18mm tall x 2mm shaft hole</li>
            <li>Material: Green PETG</li>
            <li>Mass: 1 g</li>
        <ul/>`
    },
    {
        name: "Power Cell",
        unlisted: true,
        link: "power-cell",
        image: "power-cell-1.jpg",
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
            <li>Expression: &nbsp; :) </li>
        <ul/>`
    },
]
