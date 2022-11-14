import { useCallback, useEffect, useMemo, useRef, useState } from "react";
/* import { useNavigate } from "react-router-dom"; */

export const Login = () => {
  /* const navigate = useNavigate();

  const handleLogin = () => {
    navigate('/pagina-inicial');
  }
 */

  const inputSenhaRef = useRef<HTMLInputElement>(null);

  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  /* const emailLength = email.length; */
  const emailLength = useMemo(() => {
    /* console.log('executou') */
    return email.length * 1000;
  }, [email.length]);

  const handleEntrar1 = useCallback(() => {
    /* console.log(email);
    console.log(senha); */
    setEmail(email);
    setSenha(senha);

    /* if (inputSenhaRef.current !== null) {
      inputSenhaRef.current.focus();
    } */

  }, [email, senha]);

  /* const handleEntrar = () => {
    console.log(email);
    console.log(senha);
  } */

  const onClear = () => {
    setEmail('');
    setSenha('');
  }

  useEffect(() => {
    /* console.log(email);
    console.log(senha); */
    setEmail(email);
    setSenha(senha);
  }, [email, senha]);

  return (
    <>
      <div>
        <form>
          <p>Quantidade de caracteres no email {emailLength}</p>

          <label>
            <span>Email</span>
            <input
              /* ref={inputSenhaRef} */
              value={email}
              onChange={e => setEmail(e.target.value)}
              onKeyDown={e => e.key === 'Enter' ? inputSenhaRef.current?.focus() : undefined}
            />
          </label>
          <label>
            <span>Senha</span>
            <input
              ref={inputSenhaRef}
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
            />
          </label>
        </form>
        {email}
        {senha}
        <button
          type="button"
          onClick={() => {
            handleEntrar1();
            onClear();
          }}>
          Entrar
        </button>
      </div>
    </>
  );
}