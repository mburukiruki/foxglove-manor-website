<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Foxglove Manor | Adult Family Home Mount Vernon</title>
    <meta name="description" content="Specialized dementia, Alzheimer's, and geriatric care in Mount Vernon. Compassionate adult family home with 24/7 care in a secure, loving environment.">
    <!-- Tailwind CSS for modern styling -->
    <script src="https://cdn.tailwindcss.com"></script>
    <!-- Google Fonts -->
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
    <!-- Lucide Icons -->
    <script src="https://unpkg.com/lucide@latest"></script>
    <style>
        body { font-family: 'Inter', sans-serif; scroll-behavior: smooth; }
        .hero-gradient { background: linear-gradient(135deg, #f0fdf4 0%, #ffffff 100%); }
        .glass-nav { background: rgba(255, 255, 255, 0.9); backdrop-filter: blur(10px); }
    </style>
</head>
<body class="text-slate-600 bg-slate-50">

    <!-- Navigation -->
    <nav id="navbar" class="fixed w-full z-50 transition-all duration-300 glass-nav py-4 border-b border-slate-100">
        <div class="container mx-auto px-6 flex justify-between items-center">
            <div class="flex items-center gap-2 cursor-pointer" onclick="window.scrollTo({top: 0, behavior: 'smooth'})">
                <div class="w-10 h-10 bg-emerald-700 rounded-full flex items-center justify-center">
                    <i data-lucide="heart" class="w-6 h-6 text-white fill-white"></i>
                </div>
                <span class="text-xl md:text-2xl font-bold text-slate-800 tracking-tight">
                    Foxglove <span class="text-emerald-700">Manor</span>
                </span>
            </div>

            <!-- Desktop Menu -->
            <div class="hidden md:flex items-center gap-6">
                <a href="#about" class="text-slate-600 hover:text-emerald-700 font-medium transition-colors">About Us</a>
                <a href="#services" class="text-slate-600 hover:text-emerald-700 font-medium transition-colors">Services</a>
                <a href="#gallery" class="text-slate-600 hover:text-emerald-700 font-medium transition-colors">Our Home</a>
                <a href="#contact" class="bg-emerald-700 text-white px-6 py-2.5 rounded-full hover:bg-emerald-800 transition-colors shadow-sm">Contact Us</a>
            </div>

            <!-- Mobile Toggle -->
            <button class="md:hidden p-2 text-slate-800" onclick="toggleMenu()">
                <i data-lucide="menu" id="menu-icon"></i>
            </button>
        </div>

        <!-- Mobile Menu -->
        <div id="mobile-menu" class="hidden md:hidden absolute top-full left-0 w-full bg-white shadow-lg border-t border-slate-100 flex flex-col">
            <a href="#about" class="px-6 py-4 border-b border-slate-50 hover:bg-emerald-50" onclick="toggleMenu()">About Us</a>
            <a href="#services" class="px-6 py-4 border-b border-slate-50 hover:bg-emerald-50" onclick="toggleMenu()">Services</a>
            <a href="#gallery" class="px-6 py-4 border-b border-slate-50 hover:bg-emerald-50" onclick="toggleMenu()">Our Home</a>
            <a href="#contact" class="px-6 py-4 bg-emerald-700 text-white" onclick="toggleMenu()">Contact Us</a>
        </div>
    </nav>

    <!-- Hero Section -->
    <section id="home" class="relative pt-32 pb-20 md:pt-48 md:pb-32 hero-gradient overflow-hidden">
        <div class="container mx-auto px-6">
            <div class="flex flex-col md:flex-row items-center gap-12">
                <div class="md:w-1/2 space-y-8 text-center md:text-left">
                    <div class="inline-flex items-center gap-2 px-4 py-2 bg-emerald-100 text-emerald-800 rounded-full text-sm font-semibold">
                        <i data-lucide="star" class="w-4 h-4 fill-emerald-800"></i>
                        <span>Now Accepting Residents</span>
                    </div>
                    <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight">
                        Where Compassionate Care Meets the <span class="text-emerald-700">Comforts of Home</span>
                    </h1>
                    <p class="text-lg text-slate-600 leading-relaxed max-w-lg mx-auto md:mx-0">
                        Specialized dementia, Alzheimer's, and geriatric care in Mount Vernon. We provide a secure, loving environment that feels exactly like home.
                    </p>
                    <div class="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                        <a href="#contact" class="px-8 py-4 bg-emerald-700 text-white rounded-full font-semibold hover:bg-emerald-800 transition-all shadow-lg text-center">
                            Schedule a Private Tour
                        </a>
                        <a href="#services" class="px-8 py-4 bg-white text-slate-700 border border-slate-200 rounded-full font-semibold hover:bg-slate-50 transition-all shadow-sm text-center">
                            Explore Our Services
                        </a>
                    </div>
                </div>
                <div class="md:w-1/2 relative">
                    <div class="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl relative z-10 border-8 border-white bg-slate-100 flex flex-col items-center justify-center text-slate-400">
                        <i data-lucide="home" class="w-20 h-20 mb-4 opacity-20"></i>
                        <p class="font-semibold text-slate-500">Main Exterior Image</p>
                        <p class="text-xs uppercase tracking-widest mt-2">Professional Photo Pending</p>
                    </div>
                    <div class="absolute -bottom-6 -left-6 w-48 h-48 bg-emerald-200 rounded-full -z-10 blur-3xl opacity-50"></div>
                </div>
            </div>
        </div>
    </section>

    <!-- Features Bar -->
    <section class="py-12 bg-white border-y border-slate-100">
        <div class="container mx-auto px-6">
            <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
                <div class="text-center group">
                    <div class="w-12 h-12 bg-emerald-50 text-emerald-700 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-emerald-100">
                        <i data-lucide="user-check"></i>
                    </div>
                    <h4 class="font-bold text-slate-800">24/7 Awake Staff</h4>
                    <p class="text-xs text-slate-500">Continuous monitoring</p>
                </div>
                <div class="text-center group">
                    <div class="w-12 h-12 bg-emerald-50 text-emerald-700 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-emerald-100">
                        <i data-lucide="utensils"></i>
                    </div>
                    <h4 class="font-bold text-slate-800">Fresh Meals</h4>
                    <p class="text-xs text-slate-500">Skagit Valley produce</p>
                </div>
                <div class="text-center group">
                    <div class="w-12 h-12 bg-emerald-50 text-emerald-700 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-emerald-100">
                        <i data-lucide="activity"></i>
                    </div>
                    <h4 class="font-bold text-slate-800">Local Health</h4>
                    <p class="text-xs text-slate-500">Near Skagit Valley Hosp.</p>
                </div>
                <div class="text-center group">
                    <div class="w-12 h-12 bg-emerald-50 text-emerald-700 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-emerald-100">
                        <i data-lucide="users"></i>
                    </div>
                    <h4 class="font-bold text-slate-800">Daily Activities</h4>
                    <p class="text-xs text-slate-500">Tailored engagement</p>
                </div>
            </div>
        </div>
    </section>

    <!-- About Section -->
    <section id="about" class="py-20 md:py-32 bg-slate-50">
        <div class="container mx-auto px-6">
            <div class="max-w-4xl mx-auto text-center space-y-12">
                <div class="space-y-4">
                    <h2 class="text-3xl md:text-5xl font-bold text-slate-900 leading-tight">Dedicated to Dignity, Wellbeing, and Peace of Mind</h2>
                    <div class="h-1.5 w-24 bg-emerald-700 mx-auto rounded-full"></div>
                </div>
                
                <div class="grid md:grid-cols-2 gap-10 text-left">
                    <div class="space-y-6">
                        <p class="text-xl text-slate-600 leading-relaxed font-medium">
                            Located in a quiet, residential neighborhood of Mount Vernon, Foxglove Manor offers a refreshing alternative to large, institutional facilities. 
                        </p>
                        <p class="text-lg text-slate-600 leading-relaxed">
                            We believe that the best care happens in a home setting, where routines are respected and relationships are personal.
                        </p>
                    </div>
                    <div class="bg-emerald-700 text-white p-8 rounded-3xl shadow-xl">
                        <h4 class="font-bold text-xl mb-6 flex items-center gap-2"><i data-lucide="shield" class="text-emerald-300"></i> Why Choose Us:</h4>
                        <ul class="space-y-4 text-emerald-50">
                            <li class="flex items-start gap-3">
                                <i data-lucide="chevron-right" class="w-5 h-5 mt-0.5 text-emerald-400"></i>
                                <span>High Staff-to-Resident Ratio</span>
                            </li>
                            <li class="flex items-start gap-3">
                                <i data-lucide="chevron-right" class="w-5 h-5 mt-0.5 text-emerald-400"></i>
                                <span>24/7 Awake Monitoring & Care</span>
                            </li>
                            <li class="flex items-start gap-3">
                                <i data-lucide="chevron-right" class="w-5 h-5 mt-0.5 text-emerald-400"></i>
                                <span>Secure Memory Care Features</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Services Grid -->
    <section id="services" class="py-20 md:py-32 bg-white">
        <div class="container mx-auto px-6 text-center">
            <h2 class="text-3xl md:text-4xl font-bold text-slate-900 mb-16">Comprehensive Care Services</h2>
            <div class="grid md:grid-cols-3 gap-8">
                <!-- Memory Care -->
                <div class="p-8 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-md transition-shadow text-left">
                    <div class="w-12 h-12 bg-emerald-50 rounded-xl flex items-center justify-center mb-6">
                        <i data-lucide="heart" class="text-emerald-700"></i>
                    </div>
                    <h3 class="text-xl font-bold mb-2">Memory Care</h3>
                    <p class="text-sm font-bold text-emerald-700 uppercase mb-4">Alzheimer's & Dementia</p>
                    <p class="text-slate-500">Structured routines and activities designed to reduce anxiety and promote joy.</p>
                </div>
                <!-- Clinical -->
                <div class="p-8 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-md transition-shadow text-left">
                    <div class="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-6">
                        <i data-lucide="thermometer" class="text-blue-700"></i>
                    </div>
                    <h3 class="text-xl font-bold mb-2">Clinical Support</h3>
                    <p class="text-sm font-bold text-blue-700 uppercase mb-4">RN Oversight</p>
                    <p class="text-slate-500">Expert management for Diabetes, Parkinson's, and Hospice support.</p>
                </div>
                <!-- Comfort -->
                <div class="p-8 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-md transition-shadow text-left">
                    <div class="w-12 h-12 bg-amber-50 rounded-xl flex items-center justify-center mb-6">
                        <i data-lucide="coffee" class="text-amber-700"></i>
                    </div>
                    <h3 class="text-xl font-bold mb-2">Daily Living</h3>
                    <p class="text-sm font-bold text-amber-700 uppercase mb-4">Full Service</p>
                    <p class="text-slate-500">Nutritious home-cooked meals, housekeeping, and personalized hygiene assistance.</p>
                </div>
            </div>
        </div>
    </section>

    <!-- Gallery Placeholder Section -->
    <section id="gallery" class="py-20 bg-slate-50">
        <div class="container mx-auto px-6">
            <div class="max-w-xl mb-12">
                <h2 class="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Our Home Environment</h2>
                <p class="text-slate-600">We are currently updating our gallery with professional photography. Here is the layout of our specialized care facility.</p>
            </div>
            
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                <!-- Common Areas -->
                <div class="aspect-video bg-white border border-slate-200 rounded-2xl flex flex-col items-center justify-center p-6 text-center group hover:shadow-lg transition-all">
                    <div class="w-10 h-10 bg-slate-50 rounded-full flex items-center justify-center mb-3 text-slate-400 group-hover:text-emerald-600 group-hover:bg-emerald-50 transition-colors">
                        <i data-lucide="tv"></i>
                    </div>
                    <h4 class="font-bold text-slate-800">Living Room</h4>
                    <p class="text-[10px] text-slate-400 uppercase tracking-widest mt-1">Main Social Area</p>
                    <span class="text-[9px] text-emerald-500 font-bold mt-2 px-2 py-0.5 border border-emerald-100 rounded bg-emerald-50/50">PHOTO PENDING</span>
                </div>
                
                <div class="aspect-video bg-white border border-slate-200 rounded-2xl flex flex-col items-center justify-center p-6 text-center group hover:shadow-lg transition-all">
                    <div class="w-10 h-10 bg-slate-50 rounded-full flex items-center justify-center mb-3 text-slate-400 group-hover:text-emerald-600 group-hover:bg-emerald-50 transition-colors">
                        <i data-lucide="utensils-crossed"></i>
                    </div>
                    <h4 class="font-bold text-slate-800">Kitchen</h4>
                    <p class="text-[10px] text-slate-400 uppercase tracking-widest mt-1">Nutritious Meal Prep</p>
                    <span class="text-[9px] text-emerald-500 font-bold mt-2 px-2 py-0.5 border border-emerald-100 rounded bg-emerald-50/50">PHOTO PENDING</span>
                </div>
                
                <div class="aspect-video bg-white border border-slate-200 rounded-2xl flex flex-col items-center justify-center p-6 text-center group hover:shadow-lg transition-all">
                    <div class="w-10 h-10 bg-slate-50 rounded-full flex items-center justify-center mb-3 text-slate-400 group-hover:text-emerald-600 group-hover:bg-emerald-50 transition-colors">
                        <i data-lucide="coffee"></i>
                    </div>
                    <h4 class="font-bold text-slate-800">Dining Area</h4>
                    <p class="text-[10px] text-slate-400 uppercase tracking-widest mt-1">Family-style Dining</p>
                    <span class="text-[9px] text-emerald-500 font-bold mt-2 px-2 py-0.5 border border-emerald-100 rounded bg-emerald-50/50">PHOTO PENDING</span>
                </div>
                
                <div class="aspect-video bg-white border border-slate-200 rounded-2xl flex flex-col items-center justify-center p-6 text-center group hover:shadow-lg transition-all">
                    <div class="w-10 h-10 bg-slate-50 rounded-full flex items-center justify-center mb-3 text-slate-400 group-hover:text-emerald-600 group-hover:bg-emerald-50 transition-colors">
                        <i data-lucide="door-open"></i>
                    </div>
                    <h4 class="font-bold text-slate-800">Front Porch</h4>
                    <p class="text-[10px] text-slate-400 uppercase tracking-widest mt-1">Main Entrance</p>
                    <span class="text-[9px] text-emerald-500 font-bold mt-2 px-2 py-0.5 border border-emerald-100 rounded bg-emerald-50/50">PHOTO PENDING</span>
                </div>
                
                <div class="aspect-video bg-white border border-slate-200 rounded-2xl flex flex-col items-center justify-center p-6 text-center group hover:shadow-lg transition-all">
                    <div class="w-10 h-10 bg-slate-50 rounded-full flex items-center justify-center mb-3 text-slate-400 group-hover:text-emerald-600 group-hover:bg-emerald-50 transition-colors">
                        <i data-lucide="sun"></i>
                    </div>
                    <h4 class="font-bold text-slate-800">Back Porch</h4>
                    <p class="text-[10px] text-slate-400 uppercase tracking-widest mt-1">Secure Outdoor Area</p>
                    <span class="text-[9px] text-emerald-500 font-bold mt-2 px-2 py-0.5 border border-emerald-100 rounded bg-emerald-50/50">PHOTO PENDING</span>
                </div>

                <!-- Resident Bedrooms (A-F) -->
                <div class="aspect-video bg-white border border-slate-200 rounded-2xl flex flex-col items-center justify-center p-6 text-center group hover:shadow-lg transition-all">
                    <div class="w-10 h-10 bg-slate-50 rounded-full flex items-center justify-center mb-3 text-slate-400 group-hover:text-emerald-600 group-hover:bg-emerald-50 transition-colors">
                        <i data-lucide="bed"></i>
                    </div>
                    <h4 class="font-bold text-slate-800">Resident Room A</h4>
                    <p class="text-[10px] text-slate-400 uppercase tracking-widest mt-1">Private Resident Living</p>
                    <span class="text-[9px] text-emerald-500 font-bold mt-2 px-2 py-0.5 border border-emerald-100 rounded bg-emerald-50/50">PHOTO PENDING</span>
                </div>
                
                <div class="aspect-video bg-white border border-slate-200 rounded-2xl flex flex-col items-center justify-center p-6 text-center group hover:shadow-lg transition-all">
                    <div class="w-10 h-10 bg-slate-50 rounded-full flex items-center justify-center mb-3 text-slate-400 group-hover:text-emerald-600 group-hover:bg-emerald-50 transition-colors">
                        <i data-lucide="bed"></i>
                    </div>
                    <h4 class="font-bold text-slate-800">Resident Room B</h4>
                    <p class="text-[10px] text-slate-400 uppercase tracking-widest mt-1">Private Resident Living</p>
                    <span class="text-[9px] text-emerald-500 font-bold mt-2 px-2 py-0.5 border border-emerald-100 rounded bg-emerald-50/50">PHOTO PENDING</span>
                </div>
                
                <div class="aspect-video bg-white border border-slate-200 rounded-2xl flex flex-col items-center justify-center p-6 text-center group hover:shadow-lg transition-all">
                    <div class="w-10 h-10 bg-slate-50 rounded-full flex items-center justify-center mb-3 text-slate-400 group-hover:text-emerald-600 group-hover:bg-emerald-50 transition-colors">
                        <i data-lucide="bed"></i>
                    </div>
                    <h4 class="font-bold text-slate-800">Resident Room C</h4>
                    <p class="text-[10px] text-slate-400 uppercase tracking-widest mt-1">Private Resident Living</p>
                    <span class="text-[9px] text-emerald-500 font-bold mt-2 px-2 py-0.5 border border-emerald-100 rounded bg-emerald-50/50">PHOTO PENDING</span>
                </div>
                
                <div class="aspect-video bg-white border border-slate-200 rounded-2xl flex flex-col items-center justify-center p-6 text-center group hover:shadow-lg transition-all">
                    <div class="w-10 h-10 bg-slate-50 rounded-full flex items-center justify-center mb-3 text-slate-400 group-hover:text-emerald-600 group-hover:bg-emerald-50 transition-colors">
                        <i data-lucide="bed"></i>
                    </div>
                    <h4 class="font-bold text-slate-800">Resident Room D</h4>
                    <p class="text-[10px] text-slate-400 uppercase tracking-widest mt-1">Private Resident Living</p>
                    <span class="text-[9px] text-emerald-500 font-bold mt-2 px-2 py-0.5 border border-emerald-100 rounded bg-emerald-50/50">PHOTO PENDING</span>
                </div>
                
                <div class="aspect-video bg-white border border-slate-200 rounded-2xl flex flex-col items-center justify-center p-6 text-center group hover:shadow-lg transition-all">
                    <div class="w-10 h-10 bg-slate-50 rounded-full flex items-center justify-center mb-3 text-slate-400 group-hover:text-emerald-600 group-hover:bg-emerald-50 transition-colors">
                        <i data-lucide="bed"></i>
                    </div>
                    <h4 class="font-bold text-slate-800">Resident Room E</h4>
                    <p class="text-[10px] text-slate-400 uppercase tracking-widest mt-1">Private Resident Living</p>
                    <span class="text-[9px] text-emerald-500 font-bold mt-2 px-2 py-0.5 border border-emerald-100 rounded bg-emerald-50/50">PHOTO PENDING</span>
                </div>
                
                <div class="aspect-video bg-white border border-slate-200 rounded-2xl flex flex-col items-center justify-center p-6 text-center group hover:shadow-lg transition-all">
                    <div class="w-10 h-10 bg-slate-50 rounded-full flex items-center justify-center mb-3 text-slate-400 group-hover:text-emerald-600 group-hover:bg-emerald-50 transition-colors">
                        <i data-lucide="bed"></i>
                    </div>
                    <h4 class="font-bold text-slate-800">Resident Room F</h4>
                    <p class="text-[10px] text-slate-400 uppercase tracking-widest mt-1">Private Resident Living</p>
                    <span class="text-[9px] text-emerald-500 font-bold mt-2 px-2 py-0.5 border border-emerald-100 rounded bg-emerald-50/50">PHOTO PENDING</span>
                </div>

                <!-- Washrooms -->
                <div class="aspect-video bg-white border border-slate-200 rounded-2xl flex flex-col items-center justify-center p-6 text-center group hover:shadow-lg transition-all">
                    <div class="w-10 h-10 bg-slate-50 rounded-full flex items-center justify-center mb-3 text-slate-400 group-hover:text-blue-600 group-hover:bg-blue-50 transition-colors">
                        <i data-lucide="bath"></i>
                    </div>
                    <h4 class="font-bold text-slate-800">Washroom 1</h4>
                    <p class="text-[10px] text-slate-400 uppercase tracking-widest mt-1">Safety Equipped</p>
                    <span class="text-[9px] text-emerald-500 font-bold mt-2 px-2 py-0.5 border border-emerald-100 rounded bg-emerald-50/50">PHOTO PENDING</span>
                </div>
                
                <div class="aspect-video bg-white border border-slate-200 rounded-2xl flex flex-col items-center justify-center p-6 text-center group hover:shadow-lg transition-all">
                    <div class="w-10 h-10 bg-slate-50 rounded-full flex items-center justify-center mb-3 text-slate-400 group-hover:text-blue-600 group-hover:bg-blue-50 transition-colors">
                        <i data-lucide="bath"></i>
                    </div>
                    <h4 class="font-bold text-slate-800">Washroom 2</h4>
                    <p class="text-[10px] text-slate-400 uppercase tracking-widest mt-1">Safety Equipped</p>
                    <span class="text-[9px] text-emerald-500 font-bold mt-2 px-2 py-0.5 border border-emerald-100 rounded bg-emerald-50/50">PHOTO PENDING</span>
                </div>
                
                <div class="aspect-video bg-white border border-slate-200 rounded-2xl flex flex-col items-center justify-center p-6 text-center group hover:shadow-lg transition-all">
                    <div class="w-10 h-10 bg-slate-50 rounded-full flex items-center justify-center mb-3 text-slate-400 group-hover:text-blue-600 group-hover:bg-blue-50 transition-colors">
                        <i data-lucide="bath"></i>
                    </div>
                    <h4 class="font-bold text-slate-800">Washroom 3</h4>
                    <p class="text-[10px] text-slate-400 uppercase tracking-widest mt-1">Safety Equipped</p>
                    <span class="text-[9px] text-emerald-500 font-bold mt-2 px-2 py-0.5 border border-emerald-100 rounded bg-emerald-50/50">PHOTO PENDING</span>
                </div>

                <!-- Caregiver Room -->
                <div class="aspect-video bg-emerald-50 border border-emerald-100 rounded-2xl flex flex-col items-center justify-center p-6 text-center group hover:shadow-lg transition-all">
                    <div class="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center mb-3 text-emerald-600">
                        <i data-lucide="user-check"></i>
                    </div>
                    <h4 class="font-bold text-emerald-900">Caregiver Suite</h4>
                    <p class="text-[10px] text-emerald-600 uppercase tracking-widest mt-1">24/7 Staff Station</p>
                    <span class="text-[9px] text-emerald-500 font-bold mt-2 px-2 py-0.5 border border-emerald-200 rounded bg-white">PHOTO PENDING</span>
                </div>
            </div>
        </div>
    </section>

    <!-- Contact Section -->
    <section id="contact" class="py-20 md:py-32 bg-emerald-900 text-white overflow-hidden relative">
        <div class="container mx-auto px-6 relative z-10">
            <div class="grid lg:grid-cols-2 gap-16">
                <div>
                    <h2 class="text-3xl md:text-5xl font-bold mb-8">Join our Family</h2>
                    <p class="text-emerald-100 text-lg mb-12">We invite you to visit, meet our caregivers, and see why Foxglove Manor is the right choice for your loved one.</p>
                    
                    <div class="space-y-8">
                        <div class="flex items-center gap-6">
                            <div class="w-14 h-14 bg-emerald-800 rounded-2xl flex items-center justify-center">
                                <i data-lucide="phone" class="text-emerald-300"></i>
                            </div>
                            <div>
                                <h3 class="text-emerald-300 text-xs font-bold uppercase tracking-wider">Call Us</h3>
                                <p class="text-xl font-bold">(360) 404-5890</p>
                            </div>
                        </div>
                        <div class="flex items-center gap-6">
                            <div class="w-14 h-14 bg-emerald-800 rounded-2xl flex items-center justify-center">
                                <i data-lucide="mail" class="text-emerald-300"></i>
                            </div>
                            <div>
                                <h3 class="text-emerald-300 text-xs font-bold uppercase tracking-wider">Email</h3>
                                <p class="text-xl font-bold">foxglovemanorafh@gmail.com</p>
                            </div>
                        </div>
                        <div class="flex items-center gap-6">
                            <div class="w-14 h-14 bg-emerald-800 rounded-2xl flex items-center justify-center">
                                <i data-lucide="map-pin" class="text-emerald-300"></i>
                            </div>
                            <div>
                                <h3 class="text-emerald-300 text-xs font-bold uppercase tracking-wider">Address</h3>
                                <p class="text-xl font-bold">3914 Foxglove Circle, Mt Vernon</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="bg-white rounded-3xl p-8 md:p-10 shadow-2xl text-slate-800">
                    <form onsubmit="event.preventDefault(); alert('Message sent successfully!');">
                        <div class="grid grid-cols-2 gap-4 mb-4">
                            <div class="space-y-1">
                                <label class="text-xs font-bold text-slate-400 uppercase">First Name</label>
                                <input type="text" class="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-emerald-500">
                            </div>
                            <div class="space-y-1">
                                <label class="text-xs font-bold text-slate-400 uppercase">Last Name</label>
                                <input type="text" class="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-emerald-500">
                            </div>
                        </div>
                        <div class="space-y-1 mb-4">
                            <label class="text-xs font-bold text-slate-400 uppercase">Email Address</label>
                            <input type="email" class="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-emerald-500">
                        </div>
                        <div class="space-y-1 mb-6">
                            <label class="text-xs font-bold text-slate-400 uppercase">Message</label>
                            <textarea class="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-emerald-500 h-32"></textarea>
                        </div>
                        <button type="submit" class="w-full py-4 bg-emerald-700 text-white font-bold rounded-xl hover:bg-emerald-800 shadow-lg flex items-center justify-center gap-2 transition-all">
                            Send Request <i data-lucide="external-link" class="w-4 h-4"></i>
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </section>

    <!-- Footer -->
    <footer class="bg-slate-900 text-slate-500 py-16">
        <div class="container mx-auto px-6 text-center md:text-left">
            <div class="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
                <div class="flex items-center gap-3">
                    <div class="w-10 h-10 bg-emerald-600 rounded-full flex items-center justify-center">
                        <i data-lucide="heart" class="text-white w-5 h-5 fill-white"></i>
                    </div>
                    <div>
                        <span class="text-xl font-bold text-white block">Foxglove Manor</span>
                        <span class="text-[10px] text-emerald-500 font-bold uppercase tracking-widest">Adult Family Home</span>
                    </div>
                </div>
                <p class="max-w-xs text-sm">Providing compassionate care for families in Skagit County.</p>
            </div>
            <div class="pt-8 border-t border-slate-800 text-xs text-center">
                <p>&copy; 2025 Foxglove Manor AFH. Licensed in Washington State.</p>
            </div>
        </div>
    </footer>

    <script>
        // Initialize Lucide Icons
        lucide.createIcons();

        // Handle Navbar Scroll
        window.addEventListener('scroll', () => {
            const nav = document.getElementById('navbar');
            if (window.scrollY > 50) {
                nav.classList.add('shadow-md');
                nav.classList.remove('py-4');
                nav.classList.add('py-2');
            } else {
                nav.classList.remove('shadow-md');
                nav.classList.add('py-4');
                nav.classList.remove('py-2');
            }
        });

        // Mobile Menu Toggle
        function toggleMenu() {
            const menu = document.getElementById('mobile-menu');
            const icon = document.getElementById('menu-icon');
            menu.classList.toggle('hidden');
            const isOpen = !menu.classList.contains('hidden');
            icon.setAttribute('data-lucide', isOpen ? 'x' : 'menu');
            lucide.createIcons();
        }

        // Smooth Scrolling for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth' });
                }
            });
        });
    </script>
</body>
</html>
