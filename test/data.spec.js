describe('email', () => {

    it('debería devolver email valido a hola@hum.com ', () => {
      assert.equal(email('hola@hum.com'), true);
    });
  
    it('debería devolver email incorrecto a hola.com', () => {
        assert.equal(email('hola.com'), false);
    }); 

    it('debería devolver email incorrecto a hola@hum', () => {
        assert.equal(email('hola@hum'), false);
    }); 

    it('debería devolver email incorrecto a hola@.com', () => {
        assert.equal(email('hola@.com'), false);
    }); 
  });

  describe('password', () => {

    it('debería devolver contraseña valido a qwert123', () => {
      assert.equal(password('qwert123'), true);
    });

    it('debería devolver contraseña incorrecto a qwertyui', () => {
      assert.equal(password('qwertyui'), false);
    });
  
    it('debería devolver contraseña incorrecto a 12345678', () => {
      assert.equal(password('12345678'), false);
    });

    it('debería devolver contraseña incorrecto a @2345678', () => {
      assert.equal(password('@2345678'), false);
    });
});