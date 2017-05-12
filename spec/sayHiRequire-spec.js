/**
 * Created by masikann on 5/8/17.
 */

// spec file check
define(['../src/sayHiRequire'], function(sayHiRequire){

    describe('says Hi', function () {
        var result;
        beforeEach(function(){
            spyOn(sayHiRequire, 'sayHi').and.callThrough();
            result = sayHiRequire.sayHi('arjun');
        });
        it('has say hi function', function(){
            expect(sayHiRequire.sayHi).toBeDefined();
        });

        it('say hi is called', function () {
            expect(sayHiRequire.sayHi).toHaveBeenCalled();
        });
        it('say hi is called with parameter arjun', function () {
            expect(sayHiRequire.sayHi).toHaveBeenCalledWith('arjun');
        });
        it('says hi from require', function () {
            expect(result).toBe('hi arjun - from require');
        });
    });

})