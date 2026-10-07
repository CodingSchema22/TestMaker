export default function PageHeader({
  title,
  subtitle,
}) {
  return (
    <div className="mb-8">

      {/* Small Label */}
      <div className="mb-2 flex items-center gap-2">
        <span className="h-1.5 w-1.5 rounded-full bg-blue-600" />

        <span className="text-xs font-semibold uppercase tracking-widest text-blue-600">
          TestMaker
        </span>
      </div>

      {/* Title */}
      <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
        {title}
      </h1>

      {/* Subtitle */}
      {subtitle && (
        <p className="mt-2 max-w-2xl text-sm leading-6 text-gray-500 sm:text-base">
          {subtitle}
        </p>
      )}

      {/* Bottom Accent */}
      <div className="mt-5 h-px w-full bg-gradient-to-r from-blue-200 via-blue-100 to-transparent" />

    </div>
  );
}