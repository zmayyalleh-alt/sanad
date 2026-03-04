import { useState, useEffect } from "react";
import {
    Box,
    Button,
    Checkbox,
    Container,
    FormControlLabel,
    IconButton,
    InputAdornment,
    TextField,
    Typography,
    ThemeProvider,
    createTheme,
    Fade,
    Paper,
    Divider,
    CircularProgress,
    Zoom,
    Grow
} from "@mui/material";
import {
    Email,
    Lock,
    Visibility,
    VisibilityOff,
    Google,
    Facebook,
    Apple,
    Language,
    ArrowForward,
    Storefront,
    WhatsApp,
    VerifiedUser,
    Security,
    AutoAwesome
} from "@mui/icons-material";
import "./login.css";

const theme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: '#ffa31a',
        },
        secondary: {
            main: '#ffcc00',
        },
        background: {
            default: '#0a0a0f',
            paper: 'rgba(25, 25, 45, 0.45)',
        }
    },
    typography: {
        fontFamily: '"Inter", "Tajawal", "Roboto", "Helvetica", "Arial", sans-serif',
        h4: {
            fontWeight: 800,
            letterSpacing: '-1px'
        }
    },
    shape: {
        borderRadius: 20
    },
    components: {
        MuiTextField: {
            styleOverrides: {
                root: {
                    '& .MuiOutlinedInput-root': {
                        backgroundColor: 'rgba(255, 255, 255, 0.03)',
                        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                        borderRadius: '16px',
                        '&:hover': {
                            backgroundColor: 'rgba(255, 255, 255, 0.06)',
                            '& .MuiOutlinedInput-notchedOutline': {
                                borderColor: 'rgba(255, 163, 26, 0.5)',
                            }
                        },
                        '&.Mui-focused': {
                            backgroundColor: 'rgba(255, 163, 26, 0.05)',
                            boxShadow: '0 0 20px rgba(255, 163, 26, 0.15), inset 0 0 20px rgba(255, 163, 26, 0.03)',
                            '& .MuiOutlinedInput-notchedOutline': {
                                borderColor: '#ffa31a',
                                borderWidth: '2px'
                            }
                        }
                    },
                    '& .MuiInputLabel-root': {
                        color: 'rgba(255, 255, 255, 0.5)',
                        fontWeight: 500,
                        '&.Mui-focused': {
                            color: '#ffa31a'
                        }
                    }
                }
            }
        },
        MuiButton: {
            styleOverrides: {
                root: {
                    textTransform: 'none',
                    padding: '16px 28px',
                    fontWeight: 700,
                    borderRadius: '16px',
                    fontSize: '1rem',
                    letterSpacing: '0.3px'
                },
                containedPrimary: {
                    background: 'linear-gradient(135deg, #ffa31a 0%, #ff7b00 100%)',
                    boxShadow: '0 8px 32px rgba(255, 123, 0, 0.4), 0 0 60px rgba(255, 163, 26, 0.15)',
                    '&:hover': {
                        background: 'linear-gradient(135deg, #ffb547 0%, #ff8c1a 100%)',
                        boxShadow: '0 12px 40px rgba(255, 123, 0, 0.55), 0 0 80px rgba(255, 163, 26, 0.25)',
                        transform: 'translateY(-3px)'
                    },
                    transition: 'all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)'
                }
            }
        },
        MuiPaper: {
            styleOverrides: {
                root: {
                    backgroundImage: 'none'
                }
            }
        }
    }
});

export default function Login() {
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [loading, setLoading] = useState(false);
    const [lang, setLang] = useState("ar");
    const [isLogin, setIsLogin] = useState(true);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const t = {
        en: {
            title: isLogin ? "Sanad" : "Join Sanad",
            subtitle: isLogin ? "Intelligent Merchant Assistant" : "Empowering Palestinian commerce",
            phone: "WhatsApp Number",
            password: "Password",
            remember: "Keep me signed in",
            forgot: "Forgot password?",
            signIn: isLogin ? "Sign In" : "Register",
            or: "OR",
            create: isLogin ? "Create Account" : "Login Now",
            newQuestion: isLogin ? "New to Sanad?" : "Already have an account?",
            langSwitch: "العربية",
            dir: "ltr",
            welcome: "Welcome back",
            features: ["Secure & Fast", "Trusted by 10K+", "24/7 Support"]
        },
        ar: {
            title: isLogin ? "سند" : "انضم إلى سند",
            subtitle: isLogin ? "المساعد الذكي للتاجر الفلسطيني" : "تمكين التجارة الفلسطينية",
            phone: "رقم الواتساب",
            password: "كلمة المرور",
            remember: "ابقَ مسجلاً",
            forgot: "نسيت كلمة المرور؟",
            signIn: isLogin ? "تسجيل الدخول" : "إنشاء حساب",
            or: "أو",
            create: isLogin ? "إنشاء حساب" : "تسجيل دخول",
            newQuestion: isLogin ? "جديد في سند؟" : "لديك حساب بالفعل؟",
            langSwitch: "English",
            dir: "rtl",
            welcome: "مرحباً بعودتك",
            features: ["آمن وسريع", "موثوق من 10K+", "دعم 24/7"]
        }
    };

    const isAr = lang === "ar";
    const current = t[lang];

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        setTimeout(() => setLoading(false), 2000);
    };

    return (
        <ThemeProvider theme={theme}>
            <Box
                sx={{
                    position: 'relative',
                    width: '100%',
                    minHeight: '100dvh',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    overflowX: 'hidden',
                    direction: current.dir,
                    py: 4,
                    background: 'linear-gradient(135deg, #0a0a0f 0%, #1a1a2e 50%, #0a0a0f 100%)'
                }}
            >
                {/* Background Image */}
                <Box
                    component="img"
                    src="/images/login.jpg"
                    className="login-bg-zoom"
                    sx={{
                        position: 'absolute',
                        inset: 0,
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        zIndex: 0
                    }}
                />

                {/* Gradient Overlays */}
                <Box
                    sx={{
                        position: 'absolute',
                        inset: 0,
                        background: `
                            radial-gradient(ellipse at 20% 80%, rgba(255, 163, 26, 0.12) 0%, transparent 50%),
                            radial-gradient(ellipse at 80% 20%, rgba(99, 102, 241, 0.08) 0%, transparent 50%),
                            radial-gradient(circle at center, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.9) 100%)
                        `,
                        zIndex: 1
                    }}
                />

                {/* Animated Grid Pattern */}
                <Box className="login-grid-pattern" />

                {/* Particles */}
                <Box className="login-particles-box">
                    <span /><span /><span /><span /><span />
                </Box>

                {/* Floating Elements */}
                <Fade in={mounted} timeout={1500}>
                    <Box sx={{ position: 'absolute', top: '15%', left: isAr ? 'auto' : '8%', right: isAr ? '8%' : 'auto', zIndex: 3, maxWidth: 280, display: { xs: 'none', md: 'block' } }}>
                        <Grow in={mounted} timeout={1200}>
                            <Box sx={{
                                p: 2.5,
                                borderRadius: 3,
                                background: 'rgba(255,255,255,0.03)',
                                backdropFilter: 'blur(8px)',
                                border: '1px solid rgba(255,255,255,0.06)'
                            }}>
                                <Typography variant="h6" sx={{ color: '#fff', fontWeight: 700, mb: 1.5 }}>
                                    {current.welcome} 👋
                                </Typography>
                                {current.features.map((feature, idx) => (
                                    <Box key={idx} sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 1 }}>
                                        <Box sx={{
                                            width: 6, height: 6, borderRadius: '50%',
                                            background: 'linear-gradient(135deg, #ffa31a, #ff7b00)',
                                            boxShadow: '0 0 10px rgba(255,163,26,0.5)'
                                        }} />
                                        <Typography sx={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.85rem' }}>
                                            {feature}
                                        </Typography>
                                    </Box>
                                ))}
                            </Box>
                        </Grow>
                    </Box>
                </Fade>

                {/* Language Toggle */}
                <Box sx={{ position: 'absolute', top: 32, right: isAr ? 'auto' : 32, left: isAr ? 32 : 'auto', zIndex: 10 }}>
                    <Zoom in={mounted} timeout={800}>
                        <Button
                            variant="outlined"
                            onClick={() => setLang(prev => prev === 'ar' ? 'en' : 'ar')}
                            startIcon={<Language />}
                            sx={{
                                borderRadius: 50,
                                borderColor: 'rgba(255,255,255,0.12)',
                                color: '#fff',
                                backdropFilter: 'blur(10px)',
                                background: 'rgba(255,255,255,0.03)',
                                px: 3,
                                fontWeight: 600,
                                '&:hover': {
                                    borderColor: '#ffa31a',
                                    bgcolor: 'rgba(255,163,26,0.1)',
                                    boxShadow: '0 0 20px rgba(255,163,26,0.2)'
                                }
                            }}
                        >
                            {current.langSwitch}
                        </Button>
                    </Zoom>
                </Box>

                {/* Main Card */}
                <Fade in={mounted} timeout={1000}>
                    <Container maxWidth="xs" sx={{ position: 'relative', zIndex: 5, px: { xs: 2 }, maxWidth: '420px !important' }}>
                        <Box className="login-card-glow" />
                        <Paper
                            elevation={0}
                            sx={{
                                p: { xs: 3, sm: 4 },
                                width: '100%',
                                borderRadius: { xs: 4, sm: 5 },
                                textAlign: 'center',
                                background: 'rgba(15, 15, 25, 0.7)',
                                backdropFilter: 'blur(20px) saturate(1.2)',
                                border: '1px solid rgba(255, 255, 255, 0.08)',
                                boxShadow: '0 40px 120px rgba(0, 0, 0, 0.7), 0 0 80px rgba(255,163,26,0.05)',
                                position: 'relative',
                                overflow: 'hidden',
                                '&::before': {
                                    content: '""',
                                    position: 'absolute',
                                    top: 0,
                                    left: 0,
                                    right: 0,
                                    height: '1px',
                                    background: 'linear-gradient(90deg, transparent, rgba(255,163,26,0.4), transparent)'
                                }
                            }}
                        >
                            {/* Brand Identity */}
                            <Box sx={{ mb: 3 }}>
                                <Box
                                    sx={{
                                        bgcolor: '#ffa31a',
                                        width: 64,
                                        height: 64,
                                        borderRadius: '20px',
                                        mx: 'auto',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        boxShadow: '0 12px 32px rgba(255, 163, 26, 0.45), 0 0 60px rgba(255, 163, 26, 0.15)',
                                        mb: 2,
                                        animation: 'floatIcon 3.5s ease-in-out infinite',
                                        position: 'relative',
                                        '&::after': {
                                            content: '""',
                                            position: 'absolute',
                                            inset: -3,
                                            borderRadius: '22px',
                                            border: '2px solid rgba(255,163,26,0.3)',
                                            animation: 'pulseRing 2s ease-in-out infinite'
                                        }
                                    }}
                                >
                                    <Storefront sx={{ fontSize: 34, color: '#fff' }} />
                                </Box>
                                <Typography variant="h4" sx={{
                                    fontWeight: 900,
                                    letterSpacing: '-0.5px',
                                    color: '#fff',
                                    background: 'linear-gradient(135deg, #fff 0%, rgba(255,163,26,0.9) 100%)',
                                    backgroundClip: 'text',
                                    WebkitBackgroundClip: 'text',
                                    WebkitTextFillColor: 'transparent',
                                    mb: 0.5
                                }}
                                    gutterBottom>
                                    {current.title}
                                </Typography>
                                <Typography variant="body2" sx={{
                                    opacity: 0.65,
                                    display: 'block',
                                    fontWeight: 500,
                                    color: 'rgba(255,255,255,0.6)'
                                }}>
                                    {current.subtitle}
                                </Typography>
                            </Box>

                            {/* Trust Badges */}
                            <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, mb: 3 }}>
                                {[
                                    { icon: Security, label: isAr ? "مشفر" : "Encrypted", color: '#4ade80' },
                                    { icon: VerifiedUser, label: isAr ? "موثوق" : "Verified", color: '#60a5fa' },
                                    { icon: AutoAwesome, label: isAr ? "ذكي" : "Smart", color: '#f472b6' }
                                ].map((item, idx) => (
                                    <Box key={idx} sx={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: 0.5,
                                        px: 1.5,
                                        py: 0.5,
                                        borderRadius: 2,
                                        background: 'rgba(255,255,255,0.03)',
                                        border: '1px solid rgba(255,255,255,0.05)'
                                    }}>
                                        <item.icon sx={{ fontSize: 14, color: item.color }} />
                                        <Typography sx={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.5)', fontWeight: 600 }}>
                                            {item.label}
                                        </Typography>
                                    </Box>
                                ))}
                            </Box>

                            {/* Form */}
                            <Box component="form" onSubmit={handleSubmit}>
                                <TextField
                                    fullWidth
                                    label={current.phone}
                                    placeholder="+970 59 123 4567"
                                    margin="dense"
                                    value={phone}
                                    onChange={(e) => setPhone(e.target.value)}
                                    InputProps={{
                                        startAdornment: (
                                            <InputAdornment position="start">
                                                <WhatsApp sx={{ color: '#25D366', mr: 0.5 }} />
                                            </InputAdornment>
                                        ),
                                    }}
                                />

                                <TextField
                                    fullWidth
                                    label={current.password}
                                    type={showPassword ? 'text' : 'password'}
                                    margin="dense"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    InputProps={{
                                        startAdornment: (
                                            <InputAdornment position="start">
                                                <Lock sx={{ color: 'primary.main', mr: 0.5 }} />
                                            </InputAdornment>
                                        ),
                                        endAdornment: (
                                            <InputAdornment position="end">
                                                <IconButton
                                                    onClick={() => setShowPassword(!showPassword)}
                                                    edge="end"
                                                    size="small"
                                                    sx={{
                                                        color: 'rgba(255,255,255,0.4)',
                                                        '&:hover': { color: '#ffa31a' }
                                                    }}
                                                >
                                                    {showPassword ? <VisibilityOff fontSize="small" /> : <Visibility fontSize="small" />}
                                                </IconButton>
                                            </InputAdornment>
                                        )
                                    }}
                                />

                                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: 1, mb: 2.5 }}>
                                    <FormControlLabel
                                        control={<Checkbox
                                            size="small"
                                            sx={{
                                                color: 'rgba(255,255,255,0.3)',
                                                p: 0.5,
                                                '&.Mui-checked': {
                                                    color: 'primary.main'
                                                }
                                            }}
                                        />}
                                        label={<Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.75rem', fontWeight: 500 }}>{current.remember}</Typography>}
                                    />
                                    <Typography
                                        variant="caption"
                                        component="a"
                                        href="#"
                                        sx={{
                                            color: 'primary.main',
                                            textDecoration: 'none',
                                            fontWeight: 600,
                                            fontSize: '0.75rem',
                                            '&:hover': {
                                                textDecoration: 'underline',
                                                textUnderlineOffset: '3px'
                                            }
                                        }}
                                    >
                                        {current.forgot}
                                    </Typography>
                                </Box>

                                <Button
                                    fullWidth
                                    variant="contained"
                                    type="submit"
                                    disabled={loading}
                                    endIcon={loading ?
                                        <CircularProgress size={20} color="inherit" /> :
                                        <ArrowForward sx={{ transform: isAr ? 'rotate(180deg)' : 'none' }} />
                                    }
                                    sx={{
                                        py: 1.8,
                                        position: 'relative',
                                        overflow: 'hidden',
                                        '&::after': {
                                            content: '""',
                                            position: 'absolute',
                                            top: 0,
                                            left: '-100%',
                                            width: '100%',
                                            height: '100%',
                                            background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)',
                                            animation: loading ? 'none' : 'shimmer 3s infinite'
                                        }
                                    }}
                                >
                                    {current.signIn}
                                </Button>

                                {/* Divider */}
                                <Box sx={{ my: 2.5 }}>
                                    <Divider sx={{
                                        '&::before, &::after': {
                                            borderColor: 'rgba(255,255,255,0.08)'
                                        },
                                        '& .MuiDivider-wrapper': {
                                            background: 'transparent'
                                        }
                                    }}>
                                        <Typography sx={{
                                            px: 2,
                                            fontSize: '0.7rem',
                                            color: 'rgba(255,255,255,0.3)',
                                            fontWeight: 700,
                                            letterSpacing: '1px'
                                        }}>
                                            {current.or}
                                        </Typography>
                                    </Divider>
                                </Box>

                                {/* Social Login */}
                                <Box sx={{ display: 'flex', gap: 1.5, justifyContent: 'center', mb: 2.5 }}>
                                    {[
                                        { Icon: Google, color: '#db4437', label: 'Google' },
                                        { Icon: Facebook, color: '#4267b2', label: 'Facebook' },
                                        { Icon: Apple, color: '#fff', label: 'Apple' }
                                    ].map(({ Icon, color, label }, idx) => (
                                        <IconButton
                                            key={idx}
                                            aria-label={label}
                                            sx={{
                                                border: '1px solid rgba(255,255,255,0.08)',
                                                width: 52,
                                                height: 52,
                                                color: color,
                                                background: 'rgba(255,255,255,0.02)',
                                                '&:hover': {
                                                    bgcolor: 'rgba(255,255,255,0.06)',
                                                    borderColor: 'rgba(255,255,255,0.2)',
                                                    transform: 'translateY(-3px)',
                                                    boxShadow: '0 8px 24px rgba(0,0,0,0.3)'
                                                },
                                                transition: 'all 0.25s cubic-bezier(0.4, 0, 0.2, 1)'
                                            }}
                                        >
                                            <Icon fontSize="medium" />
                                        </IconButton>
                                    ))}
                                </Box>

                                {/* Switch Mode */}
                                <Typography sx={{
                                    opacity: 0.5,
                                    fontSize: '0.8rem',
                                    fontWeight: 500
                                }}>
                                    {current.newQuestion}{' '}
                                    <Box
                                        component="span"
                                        onClick={() => setIsLogin(!isLogin)}
                                        sx={{
                                            color: 'primary.main',
                                            fontWeight: 700,
                                            cursor: 'pointer',
                                            transition: 'all 0.2s',
                                            '&:hover': {
                                                textDecoration: 'underline',
                                                textUnderlineOffset: '3px'
                                            }
                                        }}
                                    >
                                        {current.create}
                                    </Box>
                                </Typography>
                            </Box>
                        </Paper>

                        {/* Footer */}
                        <Typography sx={{
                            mt: 2.5,
                            fontSize: '0.7rem',
                            color: 'rgba(255,255,255,0.25)',
                            textAlign: 'center'
                        }}>
                            © 2026 Sanad. {isAr ? "جميع الحقوق محفوظة" : "All rights reserved"}
                        </Typography>
                    </Container>
                </Fade>
            </Box>
        </ThemeProvider>
    );
}
