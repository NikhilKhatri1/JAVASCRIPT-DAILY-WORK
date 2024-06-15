
document.addEventListener("DOMContentLoaded", function () {

    // Function to calculate total amount
    function calculateTotalAmount() {
        // Retrieve form values
        var nameType = document.getElementById("userName").value;
        var checkIn = document.getElementById("checkInDate").value;
        var roomType = document.querySelector('input[name="room"]:checked').value;
        var numberOfDays = parseInt(document.getElementById('numberOfDays').value);
        var numberOfPersons = parseInt(document.getElementById('numberOfPersons').value);
        var advanceAmount = parseInt(document.getElementById('advanceAmount').value);

        // Calculate room price per day
        var roomPricePerDay = 0;
        if (roomType === "deluxe") {
            roomPricePerDay = 2500;
        } else if (roomType === "suite") {
            roomPricePerDay = 4000;
        }

        // Calculate additional charges
        var acCharge = document.getElementById('acCheckbox').checked ? 1000 : 0;
        var lockerCharge = document.getElementById('lockerCheckbox').checked ? 300 : 0;
        var extraPersonCharge = numberOfPersons > 2 ? (numberOfPersons - 2) * 1000 : 0;

        // Calculate total room charge
        var totalRoomCharge = (roomPricePerDay) * numberOfDays + acCharge + lockerCharge;

        // Calculate total amount
        var totalAmount = totalRoomCharge + extraPersonCharge - advanceAmount;

        // Display details in the modal
        document.getElementById('CustomerNameSummary').innerHTML = nameType;
        document.getElementById('CheckInSummary').innerHTML = checkIn;// Function to calculate total amount
        function calculateTotalAmount() {
            // Retrieve form values
            var nameType = document.getElementById("userName").value;
            var checkIn = document.getElementById("checkInDate").value;
            var roomType = document.querySelector('input[name="room"]:checked').value;
            var numberOfDays = parseInt(document.getElementById('numberOfDays').value);
            var numberOfPersons = parseInt(document.getElementById('numberOfPersons').value);
            var advanceAmount = parseInt(document.getElementById('advanceAmount').value);

            // Calculate room price per day
            var roomPricePerDay = 0;
            if (roomType === "deluxe") {
                roomPricePerDay = 2500;
            } else if (roomType === "suite") {
                roomPricePerDay = 4000;
            }

            // Calculate additional charges
            var acCharge = document.getElementById('acCheckbox').checked ? 1000 : 0;
            var lockerCharge = document.getElementById('lockerCheckbox').checked ? 300 : 0;
            var extraPersonCharge = numberOfPersons > 2 ? (numberOfPersons - 2) * 1000 : 0;

            // Calculate total room charge
            var totalRoomCharge = (roomPricePerDay + acCharge + lockerCharge) * numberOfDays;

            // Calculate total amount
            var totalAmount = totalRoomCharge + extraPersonCharge - advanceAmount;

            // Display details in the modal
            document.getElementById('CustomerNameSummary').innerHTML = nameType;
            document.getElementById('CheckInSummary').innerHTML = checkIn;
            document.getElementById('roomTypeSummary').innerText = roomType;
            document.getElementById('numberOfDaysSummary').innerText = numberOfDays;
            document.getElementById('numberOfPersonsSummary').innerText = numberOfPersons;
            document.getElementById('roomChargeSummary').innerText = totalRoomCharge;
            document.getElementById('extraPersonChargeSummary').innerText = extraPersonCharge;
            document.getElementById('advanceAmountSummary').innerText = advanceAmount;
            document.getElementById('totalAmountSummary').innerText = totalAmount;
        }

        // Event listener for the "Book Ticket" button
        document.getElementById('bookTicketButton').addEventListener('click', function () {
            calculateTotalAmount();
        });

        document.getElementById('roomTypeSummary').innerText = roomType;
        document.getElementById('numberOfDaysSummary').innerText = numberOfDays;
        document.getElementById('numberOfPersonsSummary').innerText = numberOfPersons;
        document.getElementById('roomChargeSummary').innerText = totalRoomCharge;
        document.getElementById('extraPersonChargeSummary').innerText = extraPersonCharge;
        document.getElementById('advanceAmountSummary').innerText = advanceAmount;
        document.getElementById('totalAmountSummary').innerText = totalAmount;
    }

    // Event listener for the "Book Ticket" button
    document.getElementById('bookTicketButton').addEventListener('click', function () {
        calculateTotalAmount();
    });
    document.getElementById('bookTicketButton').addEventListener('click', function () {
        calculateTotalAmount();
    });
});



