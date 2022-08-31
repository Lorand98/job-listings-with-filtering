import { useEffect, useRef, useState } from 'react';

export function useDynamicSVGImport(name: string) {
  const ImportedIconRef = useRef<React.FC<React.SVGProps<SVGSVGElement>>>();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    setLoading(true);
    const importIcon = async () => {
      try {
        ImportedIconRef.current = (
          await import(`../assets/${name}`)
        ).ReactComponent;
        // if (onCompleted) {
        //   onCompleted(name, ImportedIconRef.current);
        // }
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
        }
      } finally {
        console.log(ImportedIconRef);
        setLoading(false);
      }
    };
    importIcon();
  }, [name]);

  return { error, loading, SvgIcon: ImportedIconRef.current };
}
