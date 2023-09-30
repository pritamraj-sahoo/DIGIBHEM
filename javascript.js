document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("booking-form");
    const roomTypeSelect = document.getElementById("room-type");
    const amenitiesSelect = document.getElementById("amenities");
    const advanceAmountInput = document.getElementById("advance-amount");
    const totalRoomCostInput = document.getElementById("total-room-cost");
    const totalAmenitiesCostInput = document.getElementById("total-amenities-cost");
    const totalCostInput = document.getElementById("total-cost");
    const balanceInput = document.getElementById("balance");

    form.addEventListener("submit", function (e) {
        e.preventDefault();
        calculateCost();
    });

    roomTypeSelect.addEventListener("change", calculateCost);
    amenitiesSelect.addEventListener("change", calculateCost);
    advanceAmountInput.addEventListener("input", calculateCost);

    function calculateCost() {
        const roomType = roomTypeSelect.value;
        const amenitiesSelected = amenitiesSelect.selectedOptions;
        const totalDays = parseInt(document.getElementById("total-days").value);
        const roomRate = roomType === "Delux Room" ? 2500 : 4000;
        let amenitiesCost = 0;

        for (let i = 0; i < amenitiesSelected.length; i++) {
            const amenity = amenitiesSelected[i].value;
            if (amenity === "AC") {
                amenitiesCost += 1000;
            } else if (amenity === "Locker") {
                amenitiesCost += 300;
            }
        }

        const totalRoomCost = roomRate * totalDays;
        const totalAmenitiesCost = amenitiesCost * totalDays;
        const totalCost = totalRoomCost + totalAmenitiesCost;
        const advanceAmount = parseInt(advanceAmountInput.value);
        const balance = totalCost - advanceAmount;

        totalRoomCostInput.value = totalRoomCost;
        totalAmenitiesCostInput.value = totalAmenitiesCost;
        totalCostInput.value = totalCost;
        balanceInput.value = balance;
    }
});
