const hotspots = document.querySelectorAll('.hotspot');
const subHotspots = document.querySelectorAll('.sub-hotspot');
const descriptionContainer = document.querySelector('.description-container');
const descriptionText = document.getElementById('descriptionText');
const zoomedImage = document.querySelector('.zoomed-image');
const imageContainer = document.querySelector('.image-container');
const subHotspotContainer = document.getElementById('subHotspotContainer');

let currentHotspot = null;
let currentSubHotspot = null;

hotspots.forEach(hotspot => {
    hotspot.addEventListener('mouseenter', function() {
        const image = this.getAttribute('data-image');
        const description = this.getAttribute('data-description');
        descriptionText.textContent = description;
        zoomedImage.src = image;
        descriptionContainer.classList.add('active');
        imageContainer.classList.add('zoomed');
        if (currentHotspot) {
            currentHotspot.classList.remove('active');
        }
        this.classList.add('active');
        currentHotspot = this;

        // 显示子热点容器
        if (this.getAttribute('data-image') === './img/2/井冈山.jpg') {
            subHotspotContainer.style.display = 'block';
        } else {
            subHotspotContainer.style.display = 'none';
        }
    });

    hotspot.addEventListener('mouseleave', function() {
        // 不做任何操作,热点描述一直显示
        this.classList.remove('active');
        imageContainer.classList.remove('zoomed');
        currentHotspot = null;
    });
});

subHotspots.forEach(subHotspot => {
    subHotspots.addEventListener('mouseover', function() {
        const description = this.getAttribute('data-description');
        descriptionText.textContent = description;
        descriptionContainer.classList.add('active');
    });

    subHotspots.addEventListener('mouseout', function() {
        descriptionContainer.classList.remove('active');
    });
});

document.addEventListener('mousemove', function(event) {
    if (currentHotspot && !currentHotspot.contains(event.target)) {
        currentHotspot.classList.remove('active');
        currentHotspot = null;
        descriptionContainer.classList.remove('active');
        subHotspotContainer.style.display = 'none';
    }

    if (currentSubHotspot && !currentSubHotspot.contains(event.target)) {
        currentSubHotspot.classList.remove('active');
        currentSubHotspot = null;
    }
});