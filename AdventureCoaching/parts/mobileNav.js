document.write(`
<div class="mobile-menu fixed inset-0 z-40 bg-navy-500 lg:hidden" id="mobileMenu">
        <div class="pt-24 px-6 pb-8 h-full overflow-y-auto">
            <div class="flex flex-col gap-1">
                <a href="index.html" class="px-4 py-3 text-lg text-cream-100 hover:text-copper-400 transition-colors border-b border-navy-400/20">Home</a>
                <a href="about.html" class="px-4 py-3 text-lg text-cream-100 hover:text-copper-400 transition-colors border-b border-navy-400/20">About Lance</a>
                <div class="px-4 py-3 text-lg text-copper-400 border-b border-navy-400/20 cursor-pointer" onclick="toggleMobileServices()">Services <span class="iconify inline w-4 h-4" data-icon="lucide:chevron-down" id="mobileServicesChevron"></span></div>
                <div id="mobileServicesList" class="hidden pl-6">
                    <a href="integrity.html" class="block px-4 py-2.5 text-sm text-cream-200 hover:text-copper-400 transition-colors">Integrity Coaching</a>
                    <a href="disclosure.html" class="block px-4 py-2.5 text-sm text-cream-200 hover:text-copper-400 transition-colors">Disclosure & Relational Repair</a>
                    <a href="couples.html" class="block px-4 py-2.5 text-sm text-cream-200 hover:text-copper-400 transition-colors">Couples Recovery</a>
                    <a href="cvi.html" class="block px-4 py-2.5 text-sm text-cream-200 hover:text-copper-400 transition-colors">Core Values Index</a>
                    <a href="adventure.html" class="block px-4 py-2.5 text-sm text-cream-200 hover:text-copper-400 transition-colors">Adventure Experiences</a>
                </div>
                <a href="contact.html" class="px-4 py-3 text-lg text-cream-100 hover:text-copper-400 transition-colors border-b border-navy-400/20">Contact</a>
            </div>
            <div class="mt-8">
                <a href="schedule.html" class="btn-primary block text-center px-6 py-3.5 rounded-lg text-base font-medium">Schedule Consultation</a>
            </div>
        </div>
    </div>
<script src="parts/nav-functions.js"></script>
`);