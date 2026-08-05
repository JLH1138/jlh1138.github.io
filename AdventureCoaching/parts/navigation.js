document.write(`
<div class="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
            <!-- Logo -->
            <a href="index.html" class="flex items-center gap-3 group">
                <img src="LogoWhite.svg" alt="Adventure Coaching logo" class="w-10 h-10" />
                <div>
                    <span class="font-serif text-lg text-cream-100 tracking-wide group-hover:text-copper-400 transition-colors">Adventure Coaching</span>
                    <span class="block text-[10px] uppercase tracking-[0.25em] text-copper-400 font-light">The View From the Summit</span>
                </div>
            </a>

            <!-- Desktop Nav -->
            <div class="hidden lg:flex items-center gap-1">
                <a href="index.html" class="nav-link px-4 py-2 text-sm text-cream-200 hover:text-copper-400 transition-colors duration-300">Home</a>
                <a href="about.html" class="nav-link px-4 py-2 text-sm text-cream-200 hover:text-copper-400 transition-colors duration-300">About Lance</a>

                <!-- Services Dropdown -->
                <div class="relative" id="servicesDropdown">
                    <button onclick="toggleDropdown()" class="nav-link px-4 py-2 text-sm text-cream-200 hover:text-copper-400 transition-colors duration-300 flex items-center gap-1">
                        Services
                        <span class="iconify w-4 h-4 transition-transform duration-300" data-icon="lucide:chevron-down" id="dropdownChevron"></span>
                    </button>
                    <div class="dropdown-menu absolute top-full left-0 mt-2 w-72 bg-navy-600 border border-navy-400/30 rounded-lg shadow-2xl p-2" id="dropdownMenu">
                        <a href="integrity.html" class="flex items-center gap-3 px-4 py-3 rounded-md hover:bg-cream-100/5 transition-colors group">
                            <span class="iconify w-5 h-5 text-copper-400" data-icon="lucide:shield-check"></span>
                            <div>
                                <span class="text-sm text-cream-100 group-hover:text-copper-400 transition-colors">Integrity Coaching</span>
                                <span class="block text-xs text-slate-400">Freedom & purpose</span>
                            </div>
                        </a>
                        <a href="disclosure.html" class="flex items-center gap-3 px-4 py-3 rounded-md hover:bg-cream-100/5 transition-colors group">
                            <span class="iconify w-5 h-5 text-copper-400" data-icon="lucide:door-open"></span>
                            <div>
                                <span class="text-sm text-cream-100 group-hover:text-copper-400 transition-colors">Disclosure & Repair</span>
                                <span class="block text-xs text-slate-400">Truth & healing</span>
                            </div>
                        </a>
                        <a href="couples.html" class="flex items-center gap-3 px-4 py-3 rounded-md hover:bg-cream-100/5 transition-colors group">
                            <span class="iconify w-5 h-5 text-copper-400" data-icon="lucide:heart-handshake"></span>
                            <div>
                                <span class="text-sm text-cream-100 group-hover:text-copper-400 transition-colors">Couples Recovery</span>
                                <span class="block text-xs text-slate-400">Trust & connection</span>
                            </div>
                        </a>
                        <a href="cvi.html" class="flex items-center gap-3 px-4 py-3 rounded-md hover:bg-cream-100/5 transition-colors group">
                            <span class="iconify w-5 h-5 text-copper-400" data-icon="lucide:compass"></span>
                            <div>
                                <span class="text-sm text-cream-100 group-hover:text-copper-400 transition-colors">Core Values Index</span>
                                <span class="block text-xs text-slate-400">Discover your design</span>
                            </div>
                        </a>
                        <a href="adventure.html" class="flex items-center gap-3 px-4 py-3 rounded-md hover:bg-cream-100/5 transition-colors group">
                            <span class="iconify w-5 h-5 text-copper-400" data-icon="lucide:mountain"></span>
                            <div>
                                <span class="text-sm text-cream-100 group-hover:text-copper-400 transition-colors">Adventure Experiences</span>
                                <span class="block text-xs text-slate-400">Wilderness & growth</span>
                            </div>
                        </a>
                    </div>
                </div>

                <a href="contact.html" class="nav-link px-4 py-2 text-sm text-cream-200 hover:text-copper-400 transition-colors duration-300">Contact</a>
                <a href="schedule.html" class="ml-4 btn-primary px-6 py-2.5 rounded-lg text-sm font-medium">Schedule Consultation</a>
            </div>

            <!-- Mobile Menu Toggle -->
            <button onclick="toggleMobileMenu()" class="lg:hidden w-10 h-10 flex items-center justify-center text-cream-200" id="mobileToggle">
                <span class="iconify w-6 h-6" data-icon="lucide:menu" id="mobileMenuIcon"></span>
            </button>
        </div>
<script src="parts/nav-functions.js"></script>
`);