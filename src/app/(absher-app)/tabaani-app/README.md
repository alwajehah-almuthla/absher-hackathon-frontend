# Tabaani App - تطبيق تابعني

تطبيق لمتابعة مواقع الأبناء القُصر في الوقت الفعلي.

## البنية

```
tabaani-app/
├── page.tsx                    # صفحة لوحة التحكم الرئيسية (قائمة الأبناء)
├── [childId]/
│   └── page.tsx               # صفحة تتبع موقع الطفل
├── _components/
│   ├── ChildCard.tsx          # بطاقة عرض معلومات الطفل
│   └── MapComponent.tsx       # مكون خريطة Google Maps
└── README.md
```

## المميزات

### 1. صفحة لوحة التحكم الرئيسية (`/absher-app/tabaani-app`)
- إدخال رقم الهوية الوطنية لولي الأمر (10 أرقام)
- عرض رسالة ترحيب مخصصة
- عرض قائمة بجميع الأبناء القُصر (تحت 18 سنة)
- بطاقات عرض الأبناء تحتوي على:
  - اسم الطفل
  - العمر
  - رقم الهوية الوطنية
  - تاريخ الميلاد
  - زر للانتقال إلى صفحة الموقع

### 2. صفحة تتبع موقع الطفل (`/absher-app/tabaani-app/[childId]`)
- عرض معلومات الطفل
- عرض العنوان الحالي
- عرض الإحداثيات (خط العرض والطول)
- خريطة Google Maps تفاعلية
- علامة (Marker) توضح موقع الطفل
- زر العودة إلى القائمة الرئيسية

## التكامل مع API

### الـ Hooks المستخدمة

```typescript
// جلب قائمة الأبناء
const { data: children, isLoading, error } = useChildren(parentNationalId, enabled);

// جلب موقع طفل محدد
const { data: location, isLoading, error } = useChildLocation(childId, enabled);
```

### أنواع البيانات

```typescript
type Child = {
  id: string;
  parentId: string;
  nationalId: string;
  name: string;
  birthDate: string;
  createdAt: string;
};

type ChildLocation = {
  childId: string;
  childName: string;
  latitude: number;
  longitude: number;
  address: string;
  timestamp: string;
};
```

## إعداد Google Maps

### 1. الحصول على API Key

1. اذهب إلى [Google Cloud Console](https://console.cloud.google.com/)
2. أنشئ مشروعًا جديدًا أو اختر مشروعًا موجودًا
3. فعّل **Maps JavaScript API**
4. أنشئ Credentials > API Key
5. (اختياري) قيّد المفتاح لنطاقك فقط

### 2. إضافة المفتاح إلى المشروع

أنشئ ملف `.env.local` في جذر المشروع:

```bash
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your_actual_api_key_here
```

### 3. إعادة تشغيل السيرفر

```bash
bun run dev
```

## التصميم والـ Styling

- التصميم يتبع نفس نمط الصفحة الرئيسية
- بدون صورة خلفية (background image)
- استخدام نفس المسافات (spacing) والـ layout
- البطاقات مشابهة لبطاقات الخدمات بدون الشعار
- ألوان متسقة مع باقي التطبيق (`primary-500`, `neutral-*`)
- تصميم متجاوب (responsive) لجميع الأجهزة

## الاستخدام

### مثال: اختبار التطبيق

1. افتح `/absher-app/tabaani-app`
2. أدخل رقم هوية ولي أمر (مثال: `1234567890`)
3. اضغط "عرض الأبناء"
4. اضغط على بطاقة أي طفل لعرض موقعه
5. شاهد الموقع على الخريطة

## الملاحظات المهمة

- التطبيق يستخدم `"use client"` لجميع المكونات التفاعلية
- MapComponent يتم تحميله ديناميكيًا (dynamic import) مع `ssr: false`
- الخريطة تعرض رسالة تنبيه إذا لم يتم تعيين API Key
- جميع النصوص باللغة العربية مع دعم RTL
- معالجة حالات الخطأ والتحميل بشكل كامل

## المكتبات المستخدمة

- `@vis.gl/react-google-maps` - مكونات Google Maps لـ React
- `@tanstack/react-query` - إدارة البيانات والـ API calls
- `next/navigation` - التنقل بين الصفحات
- UI Components من `@/components/ui`

## التطوير المستقبلي

- [ ] تحديث الموقع تلقائيًا كل فترة
- [ ] عرض مسار حركة الطفل
- [ ] إشعارات عند دخول/خروج من مناطق محددة (Geofencing)
- [ ] تصدير تاريخ المواقع
- [ ] دعم عرض مواقع عدة أطفال على نفس الخريطة
