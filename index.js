

document.addEventListener('DOMContentLoaded', function() {

    
    const sidebar = document.querySelector('.sidebar');
    const menuToggle = document.querySelector('.menu-toggle');

    menuToggle.addEventListener('click', function() {
        sidebar.classList.toggle('collapsed');
    });

    const menuItems = document.querySelectorAll('.menu-item');
    menuItems.forEach(item => {
        item.addEventListener('click', function() {
            menuItems.forEach(i => i.classList.remove('active'));
            this.classList.add('active');
        });
    });

    const themeToggleBtn = document.getElementById('theme-toggle');

    // Check for saved user preference and apply the theme
    if (localStorage.getItem('dark-theme') === 'enabled') {
        document.body.classList.add('dark-theme');
    }

    themeToggleBtn.addEventListener('click', () => {
        document.body.classList.toggle('dark-theme');

        // Save the user preference
        if (document.body.classList.contains('dark-theme')) {
            localStorage.setItem('dark-theme', 'enabled');
        } else {
            localStorage.setItem('dark-theme', 'disabled');
        }
    });

        const mainContent = document.getElementById('main_content');
    
        const menuItems1 = {
            profile: "profile/profile.html",
            home: "home_html",
            explore: "explore_page/explore.html",
            people: "people_page/people.html",
            class: "class_page/class.html",
            blog: "blog_page/blog.html",
            settings: "settings_page/settings.html",
            about: "about_page/about.html"
        };
    
        document.querySelectorAll('.menu-item').forEach(item => {
            item.addEventListener('click', function () {
                const id = this.id;
                console.log('Loading content:', id);
                const url = menuItems1[id];
    
                fetch(url)
                    .then(response => response.text())
                    .then(data => {
                        mainContent.innerHTML = data;
                        console.log('Content loaded:', url);
                    })
                    .catch(error => {
                        console.error('Error fetching content:', error);
                        mainContent.innerHTML = "<p>Error loading content.</p>";
                    });
            });
        });
    
});